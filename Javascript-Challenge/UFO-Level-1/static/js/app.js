const tableData = data;

// Table References

const tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");

  //Loops and appenditures

  data.forEach((dataRow) => {
    
    const row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Filters
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Date Loop Filter
  if (date) {
  
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}

// Event Tracking
d3.selectAll("#filter-btn").on("click", handleClick);

// Final Table Build
buildTable(tableData);
