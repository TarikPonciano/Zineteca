class Zine {
	constructor(coverImage,pagesTag,nPages,name,author,description) {
		this.coverImage = coverImage;
		this.pagesTag = pagesTag;
		this.pagesNumber = nPages;
		this.name = name;
		this.author = author;
		this.description = description;
		this.categories = [];
	}

	setCoverImage(imagePath) {
		this.coverImage = imagePath;
	}

	getCoverImage() {
		return this.coverImage;
	}

	setPagesTag(newTag) {
		this.pagesTag = newTag;
	}

	getPagesTag() {
		return this.pagesTag;
	}

	setPagesNumber(newNumber) {
		this.pagesNumber = newNumber;
	}

	getPagesNumber() {
		return this.pagesNumber;
	}

	setName(newName) {
		this.name = newName;
	}

	getName() {
		return this.name;
	}

	setAuthor(newAuthor) {
		this.author = newAuthor;
	}

	getAuthor() {
		return this.author;
	}

	setDescription(newDescription) {
		this.description = newDescription;
	}

	getDescription() {
		return this.description;
	}

	addCategory(newCategory) {
		this.categories.push(newCategory);
	}

	findCategoryIndex(categoryName) {
		return this.categories.indexOf(categoryName);
	}

	removeCategory(index) {
		if (index < 0 || index >= this.categories.length)
			this.categories.splice(index,1);
	}

	getCategory(index) {
		return this.categories[index];
	}

	getAllCategories() {
		return this.categories;
	}
}

var allZines = [];

// "Banco de Zines" - informações da zine

let temp = new Zine("viver-pra-que.jpg","Viver, pra que",23,"Viver, pra que?","Alunos da FACED e Zineteca","Uma fanzine com o intuito de incentivar a campanha do \"Setembro Amarelo\" e trazer essa discussão para a Faculdade de Educação, cheio de frases feitas pelos alunos.");
temp.addCategory("Campanha Social");
allZines.push(temp);

temp = new Zine("abril-vermelho.jpg","Abril Vermelho",7,"Abril Vermelho","Zineteca","Um fanzine feito por encomenda para o evento do MST na Faculdade de Educação da UFC. Ele fala um pouco sobre o massacre dos Carajás e sobre o que é o Movimento dos Trabalhadores Sem Terra.");
temp.addCategory("Educação");
allZines.push(temp);

temp = new Zine("pedagozine.jpg","Pedagozine",23,"Pedagozine","Zineteca","Fanzine feito com o intuito de ser distribuído para os novatos do curso de Pedagogia. Nele você pode encontrar informações sobre o que é a pedagogia, em que áreas o pedagogo pode atuar e como sobreviver ao primeiro semestre.");
temp.addCategory("Educação");
temp.addCategory("Pedagogia");
allZines.push(temp);

temp = new Zine("estudo-pedagogia.jpg","Resumo História da Pedagogia",15,"Resumo História da Pedagogia","Ana Vick","Nome real: \"Esse fanzine foi feito por uma pessoa que queria estudar para a prova de história da pedagogia\"<br>Nesse zine você vai encontrar uma pequena introdução sobe a história da pedagogia, que pode ser ótimo para saciar sua sede de conhecimento como pode ajudar você em uma prova.");
temp.addCategory("Educação");
temp.addCategory("Pedagogia");
temp.addCategory("História");
allZines.push(temp);

temp = new Zine("musica-do-ceu.jpg","Música do Céu",11,"Música do Céu","Zineteca"," Fanzine feito por encomenda para a divulgação de um projeto de educação musical. Nele você encontra informações sobre o projeto e algumas informações sobre as notas no violão.");
temp.addCategory("Música");
temp.addCategory("Pedagogia");
allZines.push(temp);

// Fim do "Banco de Zines"