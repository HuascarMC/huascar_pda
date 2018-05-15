num_array = [1, 2, 3, 4, 5]

def sum(array)
	sum = 0
	array.each{|number| sum += number}

	return sum
end

puts sum(num_array)






