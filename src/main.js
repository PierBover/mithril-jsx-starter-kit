const root = document.body

const sayHello = true;
const fruits = ['Apple','Mango','Banana'];

const App = {
	view () {
		return (
			<div id="App">
				<If condition={sayHello}>
					<h1>Hello World!</h1>
				</If>
				<h2>Fruits</h2>
				<ul>
					<For each="fruit" of={fruits}>
						<li>{fruit}</li>
					</For>
				</ul>
			</div>
		);
	}
}

m.mount(root, App);