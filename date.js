class Date {
    _day;
    _month;
    _year;
    constructor(day,month,year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    getDay() {
        return this._day;
    }

    setDay(day) {
        this._day = day;
    }

    getMonth() {
        return this._month;
    }

    setMonth(month) {
        this._month = month;
    }

    getYear() {
        return this._year;
    }

    setYear(year) {
        this._year = year;
    }
}