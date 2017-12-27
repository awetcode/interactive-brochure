// Wait for the document to be loaded
window.onload = function()
{
	// Find the id #brochure, and save it in the variable 'brochure'
	var brochure = document.getElementById('brochure');

	// Find all sections in #brochure, and save them in the variable 
	var sections = brochure.getElementsByTagName('section');

	//Logo through each of the sections
	for( var i = 0; i < sections.length; i++ )
	
	{
	// use sectionsClicked as the onclick callback for each section
	sections[i].onclick = sectionClicked;
}

}

//This is the onclick callback for a section
function sectionClicked()
{
	// Hide the clicked section
	this.style.display = 'none';

	// Determine if there is a page after this
	if( this.nextSibling.nextSibling )
	{
		// Show the next page
		this.nextSibling.nextSibling.style.display = 'block';
	}
	else
	{
		// Show the first page
		this.parentNode.firstChild.nextSibling.style.display = 'block';
	}

}
