function parseCount(parse) {
    let numberPerLine = Number.parseInt(parse);
    if(Number.isNaN(numberPerLine)) {
        throw new Error('Невалидное значение');
    }
    return numberPerLine;
}

function validateCount(parse) {
    try {
        return parseCount(parse);
    } catch (err) {
        return err;
    }
}


class Triangle {
    constructor(a, b, c) {
        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
            }
        this.leftSide = a;
        this.rightSide = b;
        this.basicSide = c;
    }
    
    getPerimeter() {
        return this.leftSide + this.rightSide + this.basicSide;
    }

    getArea() {
        const hP = 0.5 * this.getPerimeter();
        return parseFloat(Math.sqrt(hP * (hP - this.leftSide) * (hP - this.rightSide) * (hP - this.basicSide)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);   
    }
    catch(err) {
        const dummyTriangle = new Object();
        dummyTriangle.getArea = function() {return "Ошибка! Треугольник не существует";};
        dummyTriangle.getPerimeter = function() {return "Ошибка! Треугольник не существует";};
        return dummyTriangle;
    }
}