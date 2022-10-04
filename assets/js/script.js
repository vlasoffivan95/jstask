//1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
//(например n=4 , 1+2+3+4)

function calcElements (n) {
    let sumElements=0;
    for (let i=1; i<=n; i++) {
        sumElements +=i;
    };
    return sumElements;
};
console.log(calcElements(5))

// //2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные, id.
// 2.2 Создать объект студентской группы, содержащий имя университета, факультета и кафедры 
// 2.3 Связать обьект студента с обьектом его группы
// 2.4 Реализовать функцию вывода на экран всей информации о студенте (включая и информацию, связанную с универом) в произвольном виде. 
//Функция должна принимать обьект студента

const Student = {
    firstName:'Oleksii',
    lastName : 'Arestovich',
    gender: 'Male',
    contact:'099-333-22-11',
    id:1,
};

const University = {
    nameUniversity:"ZNTU",
    faculty:"engineering physics",
    department:"applied mechanics",
};

