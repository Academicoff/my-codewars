def positive_sum(arr):
    total = 0
    for x in arr:
        if x > 0:
            total += x
    return total
