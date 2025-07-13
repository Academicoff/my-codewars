def are_you_playing_banjo(name):
    # Проверяем, начинается ли имя с 'R' или 'r' (используем lower() для игнора регистра)
    if name.lower()[0] == 'r':
        # Если да, возвращаем строку с "plays banjo"
        return name + " plays banjo"
    else:
        # Иначе возвращаем "does not play banjo"
        return name + " does not play banjo"
    
# Альтернатива, менее читаемая, но в 1 строку
# return name + (" plays banjo" if name.lower().startswith('r') else " does not play banjo")