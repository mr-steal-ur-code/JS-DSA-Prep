function capitalizeWords(str) {
	return str
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

function capitalizeWords2(str) {
	return str
		.split(" ")
		.map((word) => word.replace(/\b\w/g, (char) => char.toUpperCase()))
		.join(" ");
}

console.log(
	"1:",
	capitalizeWords("Harry is a Wizard who belongs to Gryffindor House")
);
console.log(
	"2:",
	capitalizeWords2("Harry is a Wizard who belongs to Gryffindor House")
);
