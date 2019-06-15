const   contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "paramPauta",
				"type": "string"
			},
			{
				"name": "paramDecisao",
				"type": "string"
			},
			{
				"name": "paramData",
				"type": "string"
			}
		],
		"name": "ArquivarAta",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "numeroAta",
				"type": "uint256"
			}
		],
		"name": "ConsultaDeliberacoesConselho",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "livro1",
		"outputs": [
			{
				"name": "pauta",
				"type": "string"
			},
			{
				"name": "decisao",
				"type": "string"
			},
			{
				"name": "data",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"name": "livro2",
		"outputs": [
			{
				"name": "pauta",
				"type": "string"
			},
			{
				"name": "decisao",
				"type": "string"
			},
			{
				"name": "data",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
    
    if (network === "4") {
        contractAddress = "0x6b7b68aa37af3065787a51c7580aeaa6f021a023"; 
    
    } else {
    contractAddress = "0x6b7b68aa37af3065787a51c7580aeaa6f021a023"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
