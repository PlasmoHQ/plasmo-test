# Plasmo storage issue using --target=*-mv2


# How to reproduce
run either ```pnpm dev --target=firefox-mv2```

# expected behaviour
clicking the double button in popup ui should update the open-count value and persist it to storage and cause content to rerender

# actual behaviour 
nothing happens
inpecting the console for popup ui shows error message 


# previous resolution from 
update to storage 0.8.1


# setup 
just run ```pnpm i```


# about the error
only show in chrome
firefox show nothing in the extension inspect
