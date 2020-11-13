let id;
const url = "https://striveschool-api.herokuapp.com/api/agenda/";

window.onload = async () => {
  let urlParams = new URLSearchParams(window.location.search); // creating a new instance of the URLSearchParams object
  id = urlParams.get("id"); // saving the id retrieved from the url address bar

  try {
    let response = await fetch(url + id); // contacting the endpoint for a single event
    let event = await response.json(); // transforming the response body in an usable object, asyncronous operation!

    let element = document.createElement("p");
    element.innerHTML = `${event.name} : ${event.description}`;

    document.querySelector("#details").appendChild(element);
  } catch (error) {
    alert("Something went wrong");
  }
};

const handleDelete = async () => {
  try {
    const response = await fetch(url + id, { method: "DELETE" });
    if (response.ok) {
      // checking the ok property which stores the successful result of the operation
      alert("Event deleted successfully");
      location.assign("index.html");
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = () => {
  location.href = "backoffice.html?id=" + id;
};
