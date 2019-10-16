const featuredRepoTitles = ["ucc-textbook-exchange", "rorke", "amnestyucc.com"];

const req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/IbrahimFadel/repos", true);
req.send();

req.addEventListener("readystatechange", processRequest, false);

function processRequest(e) {
	if (req.readyState == 4 && req.status == 200) {
		const res = JSON.parse(req.responseText);
		insertReposIntoTable(res);
	}
}

function insertReposIntoTable(repos) {
	const table = document.getElementById("projects-table");
	const head = table.createTHead();
	var row = head.insertRow(0);
	var title = row.insertCell(0);
	title.innerHTML = "<b>Title</b>";
	var desc = row.insertCell(1);
	desc.innerHTML = "<b>Description</b>";
	var lang = row.insertCell(2);
	lang.innerHTML = "<b>Language</b>";
	var view = row.insertCell(3);
	view.innerHTML = "<b>View</b>";

	for (let repo of repos) {
		for (let featuresRepo of featuredRepoTitles) {
			if (repo.name === featuresRepo) {
				console.log("https://www.github.com/" + repo.full_name);
				const tr = document.createElement("tr");
				const name = document.createElement("td");
				const desc = document.createElement("td");
				const lang = document.createElement("td");
				const view = document.createElement("td");
				const viewLink = document.createElement("a");
				name.innerHTML = repo.name;
				desc.innerHTML = repo.description;
				lang.innerHTML = repo.language;
				const viewUrl = "https://www.github.com/" + repo.full_name;
				viewLink.href = viewLink;
				view.innerHTML = "<a target='_blank' href='" + viewUrl + "'>View</a>";
				// view.appendChild(viewUrl);/
				tr.appendChild(name);
				tr.appendChild(desc);
				tr.appendChild(lang);
				tr.appendChild(view);
				table.appendChild(tr);
			}
		}
	}
}

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.github.com/users/IbrahimFadel/repos", true);
// xhr.send();

// xhr.addEventListener("readystatechange", processRequest, false);

// function processRequest(e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         const response = JSON.parse(xhr.responseText);
//         insertReposIntoTable(response);
//         console.log(response);
//     }
// }

// function insertReposIntoTable(repos) {
//     const table = document.createElement("table");
//     table.style.border = "1px solid black";
//     const head = table.createTHead();
//     var row = head.insertRow(0);
//     var title = row.insertCell(0);
//     title.innerHTML = "<b>Title</b>";
//     var title = row.insertCell(1);
//     title.innerHTML = "<b>Description</b>";
//     var title = row.insertCell(2);
//     title.innerHTML = "<b>Language</b>";
//     var title = row.insertCell(3);
//     title.innerHTML = "<b>Stars</b>";

//     for (let repo of repos) {
//         const tr = document.createElement("tr");
//         const name = document.createElement("td");
//         name.innerHTML = repo.name;
//         const desc = document.createElement("td");
//         desc.innerHTML = repo.description;
//         const lang = document.createElement("td");
//         lang.innerHTML = repo.language;
//         const stars = document.createElement("td");
//         stars.innerHTML = repo.stargazers_count;

//         tr.appendChild(name);
//         tr.appendChild(desc);
//         tr.appendChild(lang);
//         tr.appendChild(stars);
//         table.appendChild(tr);
//         document.body.appendChild(table);
//     }
// }
