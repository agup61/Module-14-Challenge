# Module-14-Challenge

The contents of this repository encompass the resolution for the Belly Button Challenge undertaking, which concentrates on generating dynamic web visualizations utilizing the D3 library. The objective is to exhibit and examine data pertaining to the diversity of bacteria found in belly buttons.

**Requirements**
Python v3.10.9

**Instructions**

To complete the Belly Button Challenge, follow these steps:

1. Employ the D3 library to retrieve the data from the specified URL, samples.json.

2. Construct a horizontal bar chart accompanied by a dropdown menu, designed to exhibit the top 10 Operational Taxonomic Units (OTUs) identified within each individual. The chart should incorporate the subsequent functionalities:

- Use sample_values as the values for the bar chart.
- Use otu_ids as the labels for the bar chart.
- Use otu_labels as the hovertext for the chart.

3. Generate a bubble chart that portrays each sample. The bubble chart ought to possess the subsequent characteristics:

- Use otu_ids for the x values.
- Use sample_values for the y values.
- Use sample_values for the marker size.
- Use otu_ids for the marker colors.
- Use otu_labels for the text values.

4. Present the sample metadata, encompassing demographic information pertaining to an individual.

5. Ensure that all the plots are capable of dynamic updating whenever a new sample is chosen from the dropdown menu. You have the freedom to design a custom layout for your dashboard.

6. Modify the Gauge Chart obtained from Plotly Gauge Charts to represent the weekly frequency of the individual's washing routine.

- You will need to modify the example gauge code to account for values ranging from 0 through 9.
- Update the chart whenever a new sample is selected.

**References**

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.
