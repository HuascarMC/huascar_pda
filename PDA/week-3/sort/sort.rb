my_array = [23, 14, 65, 13, 95]

def reverse_sort(array)
	return array.sort { |num_1, num_2|
		num_2 <=> num_1
	}
end

puts reverse_sort(my_array)