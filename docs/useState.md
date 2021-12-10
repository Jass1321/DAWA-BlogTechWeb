useState
Es una funcion de React el cual maneja el etado de las variales (su valor)
Nota:
useState siempre va a ser iniciado con 2 cosas



variable contenedora




funcion para actualizar el valor de la variable contenedora



const [count, setCount] = useState(0);
Para poder modificar el valor de una variable, se debe de usar la funcion set
const handleChangeValue = () => setCount(1);
Llamando a la funcion setCount() y pasando un valor es como actualizar el valor de count

Inputs
Estos tienen el evento onChange y basicamente este decta cada vez que el valor dle input cambia
<input name="email" type="email" onChange="{handleInput}"/>
const [email, setEmail] = useState("");

const handleInput = (event) => setEmail(event.target.value);
Nota: El event.target.value es el valor dle input

Inputs multiples
Los inputs tienen la propiedad name el cual es usado en muchos lenguajes de back para poder obtener el valor de cada input
Ejemplos en otros lenguajes

Python

request.form["email"]

PHP

$request->get("email")

JS - Node

req.body.email
El name viene a ser el identificador de cada input. En React tambien se puede usar para hacer una funcion que basada en el nombre de un input actualice el estado

Para eso se debe crear primero un estado que contenfa todos los valores de los inputs

Se supone que se teiene un formulario con nombre, correo y password:
const [inputs, setInput] = useState ({
	nombre: "",
	correo: "",
	password: ""
})
<input name="nombre" type="text" value="{inputs.nombre}">
<input name="correo" type="text" value="{inputs.correo}">
<input name="password" type="text" value="{inputs.password}">
Ahora se debe crear una funcion e cual se encargue de actualizar el valor de los inputs:
const handleInput = (event) => {
	//como obtener el nombre del input?
	//* como cada input tiene un name, se puede acceder a este a traves de `event.target.name`
	const name = event.target.name;

	//para que se pueda actualizar el estado de los inputs y que este solo actualice al que se indique

	//...inputs ->  
	setInput({
		...inputs,
		[name]: value
	});
}
Ahora se debe modificar el html con lo siguiente
<input
  name="nombre"
  type="text"
  value="{inputs.nombre}"
  onChange="{handleInputChange}"
/>

<input
  name="correo"
  type="text"
  value="{inputs.correo}"
  onChange="{handleInputChange}"
/>

<input
  name="password"
  type="text"
  value="{inputs.password}"
  onChange="{handleInputChange}"
/>