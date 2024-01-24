const treeContainer = document.getElementById('tree-container');
let selectedNode;

const addSingleNode = () => {
    const text = prompt('Enter node text:');
    const node = createNode(text);
    treeContainer.appendChild(node);
};

const addChildNode = () => {
    if (!selectedNode) {
        alert('Please select a node first.');
        return;
    }

    const text = prompt('Enter child node text:');
    const childNode = createNode(text);
    selectedNode.appendChild(childNode);
};

const addParentNode = () => {
    const text = prompt('Enter parent node text:');
    const parentNode = createNode(text);

   
    if (selectedNode) {
        parentNode.appendChild(selectedNode);
    }

    treeContainer.appendChild(parentNode);

    selectedNode = parentNode;
};

const updateNode = () => {
    if (!selectedNode) {
        alert('Please select a node first.');
        return;
    }

    const newText = prompt('Enter updated text:');
    selectedNode.textContent = newText;
};

const deleteNode = () => {
    if (!selectedNode) {
        alert('Please select a node first.');
        return;
    }

    if (confirm('Are you sure you want to delete this node?')) {
        selectedNode.parentNode.removeChild(selectedNode);
        selectedNode = null;
    }
};

const createNode = (text) => {
    const node = document.createElement('div');
    node.textContent = text;
    node.addEventListener('click', () => selectNode(node));
    return node;
};

const selectNode = (node) => {
    selectedNode = node;
    clearSelection();
    selectedNode.classList.add('selected');
};

const clearSelection = () => {
    const selectedNodes = document.querySelectorAll('.selected');
    selectedNodes.forEach(node => node.classList.remove('selected'));
};

document.getElementById('add-single-node').addEventListener('click', addSingleNode);
document.getElementById('add-child-node').addEventListener('click', addChildNode);
document.getElementById('add-parent-node').addEventListener('click', addParentNode);
document.getElementById('update-node').addEventListener('click', updateNode);
document.getElementById('delete-node').addEventListener('click', deleteNode);