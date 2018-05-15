people = [
	{name: 'Chris', age: 24},
	{name: 'Darren', age: 21}
]

def find_by_name(people, name)
	return people.find{ |person|
		person[:name] == name
	}
end

puts find_by_name(people, 'Chris')