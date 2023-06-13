// Place url in a constant variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Starting the dashboard at opening the index up
function init() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  // Use D3 to get sample names and populate the drop-down selector
  d3.json(url).then((data) => {
    // Set a variable for the sample names
    let names = data.names;

    // Add samples to dropdown menu and log the value of id for each iteration of the loop
    names.forEach((id) => {
      console.log(id);
      dropdownMenu.append("option").text(id).property("value", id);
    });

    // Set the first sample from the list and log the value of startingsubjectid
    let startingsubjectid = names[0];
    console.log(startingsubjectid);

    // Build the initial plots
    Metadata(startingsubjectid);
    BarChart(startingsubjectid);
    BubbleChart(startingsubjectid);
    GaugeChart(startingsubjectid);
  });
}


// Function that builds the bar chart
function BarChart(sample) {
  // Use D3 to retrieve all of the data
  d3.json(url).then((data) => {
    // Retrieve all sample data
    let sampleInfo = data.samples;
    // Filter based on the value of the sample
    let value = sampleInfo.filter(result => result.id == sample)[0];
    // Get the otu_ids, labels, and sample values
    let { otu_ids, otu_labels, sample_values } = value;
    // Log the data to the console
    console.log(otu_ids, otu_labels, sample_values);
    // Set top ten items to display in descending order
    let yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
    let xticks = sample_values.slice(0, 10).reverse();
    let labels = otu_labels.slice(0, 10).reverse();
    // Set up the trace for the bar chart
    let trace = {
      x: xticks,
      y: yticks,
      text: labels,
      type: "bar",
      marker: {
        color: "brown"
      },
      orientation: "h"
    };

    // Setup the layout
    let layout = {
      title: "Top 10 OTUs Present"
    };

    // Call Plotly to plot the bar chart
    Plotly.newPlot("bar", [trace], layout);
  });
}



// Function that builds the bubble chart
function BubbleChart(sample) {
  // Use D3 to retrieve all of the data
  d3.json(url).then((data) => {
    // Retrieve all sample data
    let sampleInfo = data.samples;
    // Filter based on the value of the sample
    let valueData = sampleInfo.find(result => result.id == sample);
    // Get the otu_ids, labels, and sample values
    let { otu_ids, otu_labels, sample_values } = valueData;
    // Log the data to the console
    console.log(otu_ids, otu_labels, sample_values);
    // Set up the trace for bubble chart
    let trace1 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    };
    // Set up the layout
    let layout = {
      title: "Bacteria Per Sample",
      hovermode: "closest",
      xaxis: { title: "OTU ID" }
    };

    // Call Plotly to plot the bubble chart
    Plotly.newPlot("bubble", [trace1], layout);
  });
}


// Function that updates dashboard when sample is changed
function optionChanged(value) {
  // Log the new value
  console.log(value);
  // Call all functions
  Metadata(value);
  BarChart(value);
  BubbleChart(value);
  GaugeChart(value);
}


// Function that populates metadata info
function Metadata(sample) {
  // Use D3 to retrieve all of the data
  d3.json(url).then((data) => {
    // Retrieve all metadata
    let metadata = data.metadata;
    // Filter based on the value of the sample
    let value = metadata.filter(result => result.id == sample)[0];
    // Select the metadata element
    let demoSelect = d3.select("#sample-metadata");

    // Update the HTML content with the metadata values
    demoSelect.html(
      `ID: ${value.id} <br> 
      Ethnicity: ${value.ethnicity} <br>
      Gender: ${value.gender} <br>
      Age: ${value.age} <br>
      Location: ${value.location} <br>
      BBtype: ${value.bbtype} <br>
      Wfreq: ${value.wfreq}`
    );
  });
}

// Call the initialize function
init();
