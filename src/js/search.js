function searchGuides() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results
  
    // Filter guides based on location match
    const filteredGuides = guides.filter(guide =>
      guide.location.toLowerCase().includes(query)
    );
  
    // Display the filtered guides
    filteredGuides.forEach(guide => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${guide.name}</strong> - ${guide.location}<br>${guide.bio}`;
      resultsContainer.appendChild(listItem);
    });
  }
  
  