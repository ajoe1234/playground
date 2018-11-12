// Class represented Node object in Binary Tree
class Node {
    constructor(value) {
        this.data = value
        var left = null
        var right = null
    }
}

// Declare Tree input
//          2
//         / \
//        1   3
//       / \ / \
//      0  7 9  1
var root = new Node(2)
root.left = new Node(1)
root.right = new Node(3)
root.left.left = new Node(0)
root.left.right = new Node(7)
root.right.left = new Node(9)
root.right.right = new Node(1)

// Do listing Binary Tree Depth
var listBinaryTreeDepth = (node) => {
    if(!node) {
        throw ('node is null') 
    }

    // Create queue
    var queue = []
    var output = ''
    queue.push(node)
    while(true){
        if( queue.length == 0) return output
        
        // Loop in queue in line 
        for(var i=queue.length;i>0;i--){
            // Get peek of queue
            var current = queue[0]
            output += `(${current.data})`
            output += ((i-1) > 0 ? ',' :'' )
            // Remove head of queue
            queue.shift()
            // Check existance on left leaf node
            if(current.left){
                queue.push(current.left)
            }
            // Check existance on right leaf node
            if(current.right){
                queue.push(current.right)
            }
        }
        output += '\n'
    }
}

console.log(listBinaryTreeDepth(root))
