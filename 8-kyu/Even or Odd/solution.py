# Функция для проверки, четное ли число
def even_or_odd(number):
    # Если остаток от деления на 2 равен 0, то четное
    if number % 2 == 0:
        return "Even"
    # Иначе нечетное
    else:
        return "Odd"