/*CLOSURES*/

/*
task1
создать функцию func1 которая принимает аргумент name
и выводит в консоль "Hello, 'name' !"
"Hello" вынести в отдельну переменную greeting
вызвать эту функцию
*/
/*function func1 (name){
	var greeting = "Hello";
	console.log(greeting + ', ' + name + "!");

};

func1 ("Igor-kakashka");*/


/*
task2
создать функцию func2 которая принимает аргумент name
и возвращает функцию которая будет делать то же самое что и
функция func1
вызвать func2 и положить то что она возвращает в переменную funcResult
попробывать вывести в консоль funcResult
попробывать вызвать funcResult
*/
	var m = 1;
function func2(name){
	var greeting = "Hello";
	var n = 1;


	console.log("this Big function was envoked " + m++);
	return function(){
		console.log(greeting + ', ' + name + "!");
		console.log("this function was envoked " + n++);
	};
}


/*var funcResult = func2("Igor-kazyavka");

funcResult();
funcResult();
funcResult();
funcResult();
funcResult();

func2("Igor");
func2("Igor");*/

/*
task3
создать функцию func3 которая принимает аргумент name
и аргумент number. Если number равен 1, то greeting будет "Hello",
2 - "Hi", 3 - "Good morning"
Остальное задание аналогично заданию №2
*/

/*function func3(name, number){
	var greeting = (number===1)?"Hello":(number===2)?"Hi":"Good morning";
	return function(){
		console.log(greeting + ', ' + name);
	}
}

func3("Igor-zhenih-Zhenin", 3)();
var funcRes3 = func3("Igor-zhenih-Zhenin", 3);


funcRes3();*/



/*
task4
создать функцию func4, которая принимает аргумент name
и возвращает объект с двумя методами greet1 и greet2.
greet1 выводит в консоль "Hello, 'name' !"
greet2 - на твое усмотрение
сохранить результат вызова функции в переменную
вызвать у этой переменной greet1 и greet2
*/




/*
task5
поменять func4.
добавить в возращаемый объект changeGreeting(greeting),
который будет менят Hello на что то другое
*/
