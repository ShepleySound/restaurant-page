export default function loadMenu() {
    const content = document.createElement('div')
    content.setAttribute('id', 'menu-content')

    const categoryInfo = [
        {
            name: 'Drafts',
            id: 'cat-drafts'
        },
        {
            name: 'Ciders',
            id: 'cat-ciders'
        },
        {
            name: 'Food',
            id: 'cat-food'
        }
    ]
    const categories = []
    
    categoryInfo.forEach(category => {
        const newCategory = document.createElement('div')
        newCategory.setAttribute('id', category.id)
        newCategory.classList.add('menu-category')
        const categoryHeader = document.createElement('h2')
        categoryHeader.classList.add('category-title')
        categoryHeader.innerText = category.name
        newCategory.append(categoryHeader)
        categories.push(newCategory)
    })




    const drafts = categories[0]
    const ciders = categories[1]
    const food = categories[2]

    const draftItems = [
        {
            name: 'Draft 1',
            price: '$4.99',
            description: 'Laoreet sit amet cursus sit amet.',
        },
        {
            name: 'Draft 2',
            price: '$5.99',
            description: 'Varius sit amet mattis vulputate enim nulla aliquet porttitor.',
        },
        {
            name: 'Draft 3',
            price:'$5.99',
            description: 'Ut etiam sit amet nisl purus.',
        },
        {
            name: 'Draft 4',
            price: '$4.99',
            description: 'Mattis aliquam faucibus purus in massa tempor nec feugiat.',
        },
    ]

    const ciderItems = [
        {
            name: 'Cider 1',
            price: '$3.99',
            description: 'Condimentum mattis pellentesque id nibh tortor id. Maecenas sed enim ut sem viverra aliquet eget sit.',
        },
        {
            name: 'Cider 2',
            price: '$5.99',
            description: 'Nulla facilisi cras fermentum odio eu feugiat. Quis lectus nulla at volutpat diam.',
        },
        {
            name: 'Cider 3',
            price: '$2.99',
            description: 'Condimentum mattis pellentesque id nibh tortor id.',
        },
        {
            name: 'Cider 4',
            price: '$4.99',
            description: 'Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio.',
        },
    ]

    const FoodItems = [
        {
            name: 'Food 1',
            price: '$8.99',
            description: 'Blandit volutpat maecenas volutpat blandit aliquam etiam. Sit amet risus nullam eget felis. Risus quis varius quam quisque id diam.',
        },
        {
            name: 'Food 2',
            price: '$9.99',
            description: 'Viverra aliquet eget sit amet tellus cras. Eget sit amet tellus cras adipiscing enim eu turpis egestas. In ornare quam viverra orci sagittis eu volutpat.',
        },
        {
            name: 'Food 3',
            price: '$11.99',
            description: 'Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Pharetra magna ac placerat vestibulum lectus mauris.',
        },
        {
            name: 'Food 4',
            price: '$6.99',
            description: 'Quam vulputate dignissim suspendisse in est. Dolor magna eget est lorem ipsum dolor. Aliquam id diam maecenas ultricies. Auctor elit sed vulputate mi sit amet.',
        },
    ]

    const addToMenu = function(categoryNode, itemsArray){
        itemsArray.forEach(item => {
            const menuItem = document.createElement('div')
            menuItem.classList.add('menu-item')

            const itemHead = document.createElement('div')
            itemHead.classList.add('item-head')

            const itemTitle = document.createElement('div')
            itemTitle.classList.add('item-title')
            itemTitle.innerText = item.name

            const itemPrice = document.createElement('div')
            itemPrice.classList.add('item-price')
            itemPrice.innerText = item.price

            const itemDescription = document.createElement('div')
            itemDescription.classList.add('item-description')
            itemDescription.innerText = item.description

            itemHead.append(itemTitle, itemPrice)
            menuItem.append(itemHead, itemDescription)
            categoryNode.append(menuItem)
        })
    }

    addToMenu(drafts, draftItems)
    addToMenu(ciders, ciderItems)
    addToMenu(food, FoodItems)

    content.append(ciders, drafts, food)
    return content
}