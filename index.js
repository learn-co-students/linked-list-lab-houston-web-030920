function getName(node) {
    return node.name
}

function headNode(list, collection) {
    return collection[list]
}

function next(node, collection) {
    let nextAddress = node.next;
    return collection[`${nextAddress}`]
}

function nodeAt(index, list, collection) {
    let current = headNode(list, collection);

    for (let i = 0; i < index; i++) {
        current = next(current, collection)
    }

    return current
}

function addressAt(index, list, collection) {
    if (index === 0) {
        return list
    } else {
        let node = nodeAt(index - 1, list, collection);
        return node.next
    }
}

function indexAt(node, collection, list) {
    let current = headNode(list, collection)
    let currentIndex = 0;

    while (node != current) {
        currentIndex++
        current = next(current, collection)
    }

    return currentIndex
}

function insertNodeAt(index, newNodeAddress, list, collection) {
    let prevNode = nodeAt(index - 1, list, collection);
    let nextNode = nodeAt(index, list, collection);

    let prevNodeIndex = indexAt(prevNode, collection, list)
    let nextNodeIndex = indexAt(nextNode, collection, list)

    let prevNodeAddress = addressAt(prevNodeIndex, list, collection);
    let nextNodeAddress = addressAt(nextNodeIndex, list, collection);

    prevNode.next = newNodeAddress;
    let newNode = collection[newNodeAddress];
    newNode.next = nextNodeAddress
}

function deleteNodeAt(index, list, collection) {
    let prevNode;
    let currentNode = headNode(list, collection)

    for (let i = 0; i < index; i++) {
        prevNode = currentNode;
        currentNode = next(currentNode, collection)
    }

    prevNode.next = currentNode.next
}