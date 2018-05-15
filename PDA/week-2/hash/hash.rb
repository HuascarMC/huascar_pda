my_hash = {
	name: 'Chris',
	age: 24
}

def update(hash, params)
	hash[:name] = params[:name]
	hash[:age] = params[:age]
end

update(my_hash, {
	name: 'Darren',
	age: 21
})

puts my_hash