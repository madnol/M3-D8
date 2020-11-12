window.onload = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/agenda/";
    let currentEvents = document.querySelector("#currentEvents");

    try {
      let response = await fetch(url); // this is getting the response from the API for a fetch request
      let events = await response.json(); // this is transforming the response in a json, asyncronous operation!

      if (events.length > 0) {
        events.forEach((e) => {
          let listItem = document.createElement("li");
          listItem.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between"
          );
          listItem.innerHTML = `
          <span>${e.name}</span>
          <span>
            <span>${e.price}$</span>
            <span>
              <a class="btn btn-info" href="detail.html?id=${e._id}">VIEW DETAILS</a>
            </span>
          </span>`;
          currentEvents.appendChild(listItem);
        });
      } else {
        currentEvents.innerHTML = "<h1>No planned events</h1>";
      }
    } catch (error) {
      console.log(error);
    }
  };