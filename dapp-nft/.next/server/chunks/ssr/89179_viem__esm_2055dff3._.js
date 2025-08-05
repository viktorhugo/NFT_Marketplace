module.exports = {

"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/unit.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "etherUnits": ()=>etherUnits,
    "gweiUnits": ()=>gweiUnits,
    "weiUnits": ()=>weiUnits
});
const etherUnits = {
    gwei: 9,
    wei: 18
};
const gweiUnits = {
    ether: -9,
    wei: 9
};
const weiUnits = {
    ether: -18,
    gwei: -9
}; //# sourceMappingURL=unit.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/solidity.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// https://docs.soliditylang.org/en/v0.8.16/control-structures.html#panic-via-assert-and-error-via-require
__turbopack_context__.s({
    "panicReasons": ()=>panicReasons,
    "solidityError": ()=>solidityError,
    "solidityPanic": ()=>solidityPanic
});
const panicReasons = {
    1: 'An `assert` condition failed.',
    17: 'Arithmetic operation resulted in underflow or overflow.',
    18: 'Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).',
    33: 'Attempted to convert to an invalid type.',
    34: 'Attempted to access a storage byte array that is incorrectly encoded.',
    49: 'Performed `.pop()` on an empty array',
    50: 'Array index is out of bounds.',
    65: 'Allocated too much memory or created an array which is too large.',
    81: 'Attempted to call a zero-initialized variable of internal function type.'
};
const solidityError = {
    inputs: [
        {
            name: 'message',
            type: 'string'
        }
    ],
    name: 'Error',
    type: 'error'
};
const solidityPanic = {
    inputs: [
        {
            name: 'reason',
            type: 'uint256'
        }
    ],
    name: 'Panic',
    type: 'error'
}; //# sourceMappingURL=solidity.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/abis.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* [Multicall3](https://github.com/mds1/multicall) */ __turbopack_context__.s({
    "addressResolverAbi": ()=>addressResolverAbi,
    "batchGatewayAbi": ()=>batchGatewayAbi,
    "erc1155Abi": ()=>erc1155Abi,
    "erc20Abi": ()=>erc20Abi,
    "erc20Abi_bytes32": ()=>erc20Abi_bytes32,
    "erc4626Abi": ()=>erc4626Abi,
    "erc721Abi": ()=>erc721Abi,
    "multicall3Abi": ()=>multicall3Abi,
    "smartAccountAbi": ()=>smartAccountAbi,
    "textResolverAbi": ()=>textResolverAbi,
    "universalResolverResolveAbi": ()=>universalResolverResolveAbi,
    "universalResolverReverseAbi": ()=>universalResolverReverseAbi,
    "universalSignatureValidatorAbi": ()=>universalSignatureValidatorAbi
});
const multicall3Abi = [
    {
        inputs: [
            {
                components: [
                    {
                        name: 'target',
                        type: 'address'
                    },
                    {
                        name: 'allowFailure',
                        type: 'bool'
                    },
                    {
                        name: 'callData',
                        type: 'bytes'
                    }
                ],
                name: 'calls',
                type: 'tuple[]'
            }
        ],
        name: 'aggregate3',
        outputs: [
            {
                components: [
                    {
                        name: 'success',
                        type: 'bool'
                    },
                    {
                        name: 'returnData',
                        type: 'bytes'
                    }
                ],
                name: 'returnData',
                type: 'tuple[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
const batchGatewayAbi = [
    {
        name: 'query',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'tuple[]',
                name: 'queries',
                components: [
                    {
                        type: 'address',
                        name: 'sender'
                    },
                    {
                        type: 'string[]',
                        name: 'urls'
                    },
                    {
                        type: 'bytes',
                        name: 'data'
                    }
                ]
            }
        ],
        outputs: [
            {
                type: 'bool[]',
                name: 'failures'
            },
            {
                type: 'bytes[]',
                name: 'responses'
            }
        ]
    },
    {
        name: 'HttpError',
        type: 'error',
        inputs: [
            {
                type: 'uint16',
                name: 'status'
            },
            {
                type: 'string',
                name: 'message'
            }
        ]
    }
];
const universalResolverErrors = [
    {
        inputs: [],
        name: 'ResolverNotFound',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ResolverWildcardNotSupported',
        type: 'error'
    },
    {
        inputs: [],
        name: 'ResolverNotContract',
        type: 'error'
    },
    {
        inputs: [
            {
                name: 'returnData',
                type: 'bytes'
            }
        ],
        name: 'ResolverError',
        type: 'error'
    },
    {
        inputs: [
            {
                components: [
                    {
                        name: 'status',
                        type: 'uint16'
                    },
                    {
                        name: 'message',
                        type: 'string'
                    }
                ],
                name: 'errors',
                type: 'tuple[]'
            }
        ],
        name: 'HttpError',
        type: 'error'
    }
];
const universalResolverResolveAbi = [
    ...universalResolverErrors,
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            },
            {
                name: 'address',
                type: 'address'
            }
        ]
    },
    {
        name: 'resolve',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes'
            },
            {
                name: 'data',
                type: 'bytes'
            },
            {
                name: 'gateways',
                type: 'string[]'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            },
            {
                name: 'address',
                type: 'address'
            }
        ]
    }
];
const universalResolverReverseAbi = [
    ...universalResolverErrors,
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'bytes',
                name: 'reverseName'
            }
        ],
        outputs: [
            {
                type: 'string',
                name: 'resolvedName'
            },
            {
                type: 'address',
                name: 'resolvedAddress'
            },
            {
                type: 'address',
                name: 'reverseResolver'
            },
            {
                type: 'address',
                name: 'resolver'
            }
        ]
    },
    {
        name: 'reverse',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                type: 'bytes',
                name: 'reverseName'
            },
            {
                type: 'string[]',
                name: 'gateways'
            }
        ],
        outputs: [
            {
                type: 'string',
                name: 'resolvedName'
            },
            {
                type: 'address',
                name: 'resolvedAddress'
            },
            {
                type: 'address',
                name: 'reverseResolver'
            },
            {
                type: 'address',
                name: 'resolver'
            }
        ]
    }
];
const textResolverAbi = [
    {
        name: 'text',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            },
            {
                name: 'key',
                type: 'string'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ]
    }
];
const addressResolverAbi = [
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'address'
            }
        ]
    },
    {
        name: 'addr',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'name',
                type: 'bytes32'
            },
            {
                name: 'coinType',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes'
            }
        ]
    }
];
const smartAccountAbi = [
    {
        name: 'isValidSignature',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'hash',
                type: 'bytes32'
            },
            {
                name: 'signature',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bytes4'
            }
        ]
    }
];
const universalSignatureValidatorAbi = [
    {
        inputs: [
            {
                name: '_signer',
                type: 'address'
            },
            {
                name: '_hash',
                type: 'bytes32'
            },
            {
                name: '_signature',
                type: 'bytes'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [
            {
                name: '_signer',
                type: 'address'
            },
            {
                name: '_hash',
                type: 'bytes32'
            },
            {
                name: '_signature',
                type: 'bytes'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function',
        name: 'isValidSig'
    }
];
const erc20Abi = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'allowance',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'decimals',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint8'
            }
        ]
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
];
const erc20Abi_bytes32 = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'allowance',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'decimals',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint8'
            }
        ]
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'bytes32'
            }
        ]
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'bytes32'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
];
const erc1155Abi = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'balance',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'needed',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'ERC1155InsufficientBalance',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'approver',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidApprover',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'idsLength',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'valuesLength',
                type: 'uint256'
            }
        ],
        name: 'ERC1155InvalidArrayLength',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidOperator',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidReceiver',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'ERC1155InvalidSender',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'ERC1155MissingApprovalForAll',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'ApprovalForAll',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            },
            {
                indexed: false,
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]'
            }
        ],
        name: 'TransferBatch',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'TransferSingle',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'value',
                type: 'string'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            }
        ],
        name: 'URI',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address[]',
                name: 'accounts',
                type: 'address[]'
            },
            {
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            }
        ],
        name: 'balanceOfBatch',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            }
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256[]',
                name: 'ids',
                type: 'uint256[]'
            },
            {
                internalType: 'uint256[]',
                name: 'values',
                type: 'uint256[]'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'safeBatchTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes'
            }
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'operator',
                type: 'address'
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool'
            }
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4'
            }
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'uri',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
const erc721Abi = [
    {
        type: 'event',
        name: 'Approval',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'event',
        name: 'ApprovalForAll',
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'operator',
                type: 'address'
            },
            {
                indexed: false,
                name: 'approved',
                type: 'bool'
            }
        ]
    },
    {
        type: 'event',
        name: 'Transfer',
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: true,
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'balanceOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'getApproved',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'address'
            }
        ]
    },
    {
        type: 'function',
        name: 'isApprovedForAll',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'operator',
                type: 'address'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'name',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'ownerOf',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ]
    },
    {
        type: 'function',
        name: 'safeTransferFrom',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'safeTransferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'id',
                type: 'uint256'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'setApprovalForAll',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'operator',
                type: 'address'
            },
            {
                name: 'approved',
                type: 'bool'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'symbol',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'tokenByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'index',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'tokenByIndex',
        stateMutability: 'view',
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'index',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'tokenURI',
        stateMutability: 'view',
        inputs: [
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'string'
            }
        ]
    },
    {
        type: 'function',
        name: 'totalSupply',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                type: 'uint256'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        outputs: []
    }
];
const erc4626Abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'receiver',
                type: 'address'
            },
            {
                indexed: false,
                name: 'assets',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'Deposit',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'sender',
                type: 'address'
            },
            {
                indexed: true,
                name: 'receiver',
                type: 'address'
            },
            {
                indexed: true,
                name: 'owner',
                type: 'address'
            },
            {
                indexed: false,
                name: 'assets',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'Withdraw',
        type: 'event'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            },
            {
                name: 'spender',
                type: 'address'
            }
        ],
        name: 'allowance',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'approve',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'asset',
        outputs: [
            {
                name: 'assetTokenAddress',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        name: 'balanceOf',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'convertToAssets',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'convertToShares',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'deposit',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'caller',
                type: 'address'
            }
        ],
        name: 'maxDeposit',
        outputs: [
            {
                name: 'maxAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'caller',
                type: 'address'
            }
        ],
        name: 'maxMint',
        outputs: [
            {
                name: 'maxShares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'maxRedeem',
        outputs: [
            {
                name: 'maxShares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'maxWithdraw',
        outputs: [
            {
                name: 'maxAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            }
        ],
        name: 'mint',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'previewDeposit',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'previewMint',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        name: 'previewRedeem',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        name: 'previewWithdraw',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'shares',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            },
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'redeem',
        outputs: [
            {
                name: 'assets',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalAssets',
        outputs: [
            {
                name: 'totalManagedAssets',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'transfer',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'transferFrom',
        outputs: [
            {
                type: 'bool'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: 'assets',
                type: 'uint256'
            },
            {
                name: 'receiver',
                type: 'address'
            },
            {
                name: 'owner',
                type: 'address'
            }
        ],
        name: 'withdraw',
        outputs: [
            {
                name: 'shares',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    }
]; //# sourceMappingURL=abis.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/contract.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "aggregate3Signature": ()=>aggregate3Signature
});
const aggregate3Signature = '0x82ad56cb'; //# sourceMappingURL=contract.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/contracts.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "deploylessCallViaBytecodeBytecode": ()=>deploylessCallViaBytecodeBytecode,
    "deploylessCallViaFactoryBytecode": ()=>deploylessCallViaFactoryBytecode,
    "universalSignatureValidatorByteCode": ()=>universalSignatureValidatorByteCode
});
const deploylessCallViaBytecodeBytecode = '0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe';
const deploylessCallViaFactoryBytecode = '0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe';
const universalSignatureValidatorByteCode = '0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572'; //# sourceMappingURL=contracts.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "maxInt104": ()=>maxInt104,
    "maxInt112": ()=>maxInt112,
    "maxInt120": ()=>maxInt120,
    "maxInt128": ()=>maxInt128,
    "maxInt136": ()=>maxInt136,
    "maxInt144": ()=>maxInt144,
    "maxInt152": ()=>maxInt152,
    "maxInt16": ()=>maxInt16,
    "maxInt160": ()=>maxInt160,
    "maxInt168": ()=>maxInt168,
    "maxInt176": ()=>maxInt176,
    "maxInt184": ()=>maxInt184,
    "maxInt192": ()=>maxInt192,
    "maxInt200": ()=>maxInt200,
    "maxInt208": ()=>maxInt208,
    "maxInt216": ()=>maxInt216,
    "maxInt224": ()=>maxInt224,
    "maxInt232": ()=>maxInt232,
    "maxInt24": ()=>maxInt24,
    "maxInt240": ()=>maxInt240,
    "maxInt248": ()=>maxInt248,
    "maxInt256": ()=>maxInt256,
    "maxInt32": ()=>maxInt32,
    "maxInt40": ()=>maxInt40,
    "maxInt48": ()=>maxInt48,
    "maxInt56": ()=>maxInt56,
    "maxInt64": ()=>maxInt64,
    "maxInt72": ()=>maxInt72,
    "maxInt8": ()=>maxInt8,
    "maxInt80": ()=>maxInt80,
    "maxInt88": ()=>maxInt88,
    "maxInt96": ()=>maxInt96,
    "maxUint104": ()=>maxUint104,
    "maxUint112": ()=>maxUint112,
    "maxUint120": ()=>maxUint120,
    "maxUint128": ()=>maxUint128,
    "maxUint136": ()=>maxUint136,
    "maxUint144": ()=>maxUint144,
    "maxUint152": ()=>maxUint152,
    "maxUint16": ()=>maxUint16,
    "maxUint160": ()=>maxUint160,
    "maxUint168": ()=>maxUint168,
    "maxUint176": ()=>maxUint176,
    "maxUint184": ()=>maxUint184,
    "maxUint192": ()=>maxUint192,
    "maxUint200": ()=>maxUint200,
    "maxUint208": ()=>maxUint208,
    "maxUint216": ()=>maxUint216,
    "maxUint224": ()=>maxUint224,
    "maxUint232": ()=>maxUint232,
    "maxUint24": ()=>maxUint24,
    "maxUint240": ()=>maxUint240,
    "maxUint248": ()=>maxUint248,
    "maxUint256": ()=>maxUint256,
    "maxUint32": ()=>maxUint32,
    "maxUint40": ()=>maxUint40,
    "maxUint48": ()=>maxUint48,
    "maxUint56": ()=>maxUint56,
    "maxUint64": ()=>maxUint64,
    "maxUint72": ()=>maxUint72,
    "maxUint8": ()=>maxUint8,
    "maxUint80": ()=>maxUint80,
    "maxUint88": ()=>maxUint88,
    "maxUint96": ()=>maxUint96,
    "minInt104": ()=>minInt104,
    "minInt112": ()=>minInt112,
    "minInt120": ()=>minInt120,
    "minInt128": ()=>minInt128,
    "minInt136": ()=>minInt136,
    "minInt144": ()=>minInt144,
    "minInt152": ()=>minInt152,
    "minInt16": ()=>minInt16,
    "minInt160": ()=>minInt160,
    "minInt168": ()=>minInt168,
    "minInt176": ()=>minInt176,
    "minInt184": ()=>minInt184,
    "minInt192": ()=>minInt192,
    "minInt200": ()=>minInt200,
    "minInt208": ()=>minInt208,
    "minInt216": ()=>minInt216,
    "minInt224": ()=>minInt224,
    "minInt232": ()=>minInt232,
    "minInt24": ()=>minInt24,
    "minInt240": ()=>minInt240,
    "minInt248": ()=>minInt248,
    "minInt256": ()=>minInt256,
    "minInt32": ()=>minInt32,
    "minInt40": ()=>minInt40,
    "minInt48": ()=>minInt48,
    "minInt56": ()=>minInt56,
    "minInt64": ()=>minInt64,
    "minInt72": ()=>minInt72,
    "minInt8": ()=>minInt8,
    "minInt80": ()=>minInt80,
    "minInt88": ()=>minInt88,
    "minInt96": ()=>minInt96
});
const maxInt8 = 2n ** (8n - 1n) - 1n;
const maxInt16 = 2n ** (16n - 1n) - 1n;
const maxInt24 = 2n ** (24n - 1n) - 1n;
const maxInt32 = 2n ** (32n - 1n) - 1n;
const maxInt40 = 2n ** (40n - 1n) - 1n;
const maxInt48 = 2n ** (48n - 1n) - 1n;
const maxInt56 = 2n ** (56n - 1n) - 1n;
const maxInt64 = 2n ** (64n - 1n) - 1n;
const maxInt72 = 2n ** (72n - 1n) - 1n;
const maxInt80 = 2n ** (80n - 1n) - 1n;
const maxInt88 = 2n ** (88n - 1n) - 1n;
const maxInt96 = 2n ** (96n - 1n) - 1n;
const maxInt104 = 2n ** (104n - 1n) - 1n;
const maxInt112 = 2n ** (112n - 1n) - 1n;
const maxInt120 = 2n ** (120n - 1n) - 1n;
const maxInt128 = 2n ** (128n - 1n) - 1n;
const maxInt136 = 2n ** (136n - 1n) - 1n;
const maxInt144 = 2n ** (144n - 1n) - 1n;
const maxInt152 = 2n ** (152n - 1n) - 1n;
const maxInt160 = 2n ** (160n - 1n) - 1n;
const maxInt168 = 2n ** (168n - 1n) - 1n;
const maxInt176 = 2n ** (176n - 1n) - 1n;
const maxInt184 = 2n ** (184n - 1n) - 1n;
const maxInt192 = 2n ** (192n - 1n) - 1n;
const maxInt200 = 2n ** (200n - 1n) - 1n;
const maxInt208 = 2n ** (208n - 1n) - 1n;
const maxInt216 = 2n ** (216n - 1n) - 1n;
const maxInt224 = 2n ** (224n - 1n) - 1n;
const maxInt232 = 2n ** (232n - 1n) - 1n;
const maxInt240 = 2n ** (240n - 1n) - 1n;
const maxInt248 = 2n ** (248n - 1n) - 1n;
const maxInt256 = 2n ** (256n - 1n) - 1n;
const minInt8 = -(2n ** (8n - 1n));
const minInt16 = -(2n ** (16n - 1n));
const minInt24 = -(2n ** (24n - 1n));
const minInt32 = -(2n ** (32n - 1n));
const minInt40 = -(2n ** (40n - 1n));
const minInt48 = -(2n ** (48n - 1n));
const minInt56 = -(2n ** (56n - 1n));
const minInt64 = -(2n ** (64n - 1n));
const minInt72 = -(2n ** (72n - 1n));
const minInt80 = -(2n ** (80n - 1n));
const minInt88 = -(2n ** (88n - 1n));
const minInt96 = -(2n ** (96n - 1n));
const minInt104 = -(2n ** (104n - 1n));
const minInt112 = -(2n ** (112n - 1n));
const minInt120 = -(2n ** (120n - 1n));
const minInt128 = -(2n ** (128n - 1n));
const minInt136 = -(2n ** (136n - 1n));
const minInt144 = -(2n ** (144n - 1n));
const minInt152 = -(2n ** (152n - 1n));
const minInt160 = -(2n ** (160n - 1n));
const minInt168 = -(2n ** (168n - 1n));
const minInt176 = -(2n ** (176n - 1n));
const minInt184 = -(2n ** (184n - 1n));
const minInt192 = -(2n ** (192n - 1n));
const minInt200 = -(2n ** (200n - 1n));
const minInt208 = -(2n ** (208n - 1n));
const minInt216 = -(2n ** (216n - 1n));
const minInt224 = -(2n ** (224n - 1n));
const minInt232 = -(2n ** (232n - 1n));
const minInt240 = -(2n ** (240n - 1n));
const minInt248 = -(2n ** (248n - 1n));
const minInt256 = -(2n ** (256n - 1n));
const maxUint8 = 2n ** 8n - 1n;
const maxUint16 = 2n ** 16n - 1n;
const maxUint24 = 2n ** 24n - 1n;
const maxUint32 = 2n ** 32n - 1n;
const maxUint40 = 2n ** 40n - 1n;
const maxUint48 = 2n ** 48n - 1n;
const maxUint56 = 2n ** 56n - 1n;
const maxUint64 = 2n ** 64n - 1n;
const maxUint72 = 2n ** 72n - 1n;
const maxUint80 = 2n ** 80n - 1n;
const maxUint88 = 2n ** 88n - 1n;
const maxUint96 = 2n ** 96n - 1n;
const maxUint104 = 2n ** 104n - 1n;
const maxUint112 = 2n ** 112n - 1n;
const maxUint120 = 2n ** 120n - 1n;
const maxUint128 = 2n ** 128n - 1n;
const maxUint136 = 2n ** 136n - 1n;
const maxUint144 = 2n ** 144n - 1n;
const maxUint152 = 2n ** 152n - 1n;
const maxUint160 = 2n ** 160n - 1n;
const maxUint168 = 2n ** 168n - 1n;
const maxUint176 = 2n ** 176n - 1n;
const maxUint184 = 2n ** 184n - 1n;
const maxUint192 = 2n ** 192n - 1n;
const maxUint200 = 2n ** 200n - 1n;
const maxUint208 = 2n ** 208n - 1n;
const maxUint216 = 2n ** 216n - 1n;
const maxUint224 = 2n ** 224n - 1n;
const maxUint232 = 2n ** 232n - 1n;
const maxUint240 = 2n ** 240n - 1n;
const maxUint248 = 2n ** 248n - 1n;
const maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=number.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/blob.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md#parameters
/** Blob limit per transaction. */ __turbopack_context__.s({
    "bytesPerBlob": ()=>bytesPerBlob,
    "bytesPerFieldElement": ()=>bytesPerFieldElement,
    "fieldElementsPerBlob": ()=>fieldElementsPerBlob,
    "maxBytesPerTransaction": ()=>maxBytesPerTransaction
});
const blobsPerTransaction = 6;
const bytesPerFieldElement = 32;
const fieldElementsPerBlob = 4096;
const bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
const maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction; //# sourceMappingURL=blob.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/kzg.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4844.md#parameters
__turbopack_context__.s({
    "versionedHashVersionKzg": ()=>versionedHashVersionKzg
});
const versionedHashVersionKzg = 1; //# sourceMappingURL=kzg.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "entryPoint06Address": ()=>entryPoint06Address,
    "entryPoint07Address": ()=>entryPoint07Address,
    "entryPoint08Address": ()=>entryPoint08Address,
    "ethAddress": ()=>ethAddress,
    "zeroAddress": ()=>zeroAddress
});
const entryPoint06Address = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';
const entryPoint07Address = '0x0000000071727De22E5E9d8BAf0edAc6f37da032';
const entryPoint08Address = '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108';
const ethAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const zeroAddress = '0x0000000000000000000000000000000000000000'; //# sourceMappingURL=address.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/strings.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "presignMessagePrefix": ()=>presignMessagePrefix
});
const presignMessagePrefix = '\x19Ethereum Signed Message:\n'; //# sourceMappingURL=strings.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/bytes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "erc6492MagicBytes": ()=>erc6492MagicBytes,
    "zeroHash": ()=>zeroHash
});
const erc6492MagicBytes = '0x6492649264926492649264926492649264926492649264926492649264926492';
const zeroHash = '0x0000000000000000000000000000000000000000000000000000000000000000'; //# sourceMappingURL=bytes.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "parseAccount": ()=>parseAccount
});
function parseAccount(account) {
    if (typeof account === 'string') return {
        address: account,
        type: 'json-rpc'
    };
    return account;
} //# sourceMappingURL=parseAccount.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "publicKeyToAddress": ()=>publicKeyToAddress
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/address/getAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
;
;
function publicKeyToAddress(publicKey) {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(`0x${publicKey.substring(4)}`).substring(26);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksumAddress"])(`0x${address}`);
} //# sourceMappingURL=publicKeyToAddress.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/chains/definitions/mainnet.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "mainnet": ()=>mainnet
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/defineChain.js [app-ssr] (ecmascript)");
;
const mainnet = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 1,
    name: 'Ethereum',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://eth.merkle.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io/api'
        }
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        },
        ensUniversalResolver: {
            address: '0xce01f8eee7E479C928F8919abD53E553a36CeF67',
            blockCreated: 19_258_213
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14_353_601
        }
    }
}); //# sourceMappingURL=mainnet.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/chains/definitions/anvil.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "anvil": ()=>anvil
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/defineChain.js [app-ssr] (ecmascript)");
;
const anvil = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 31_337,
    name: 'Anvil',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'http://127.0.0.1:8545'
            ],
            webSocket: [
                'ws://127.0.0.1:8545'
            ]
        }
    }
}); //# sourceMappingURL=anvil.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/chains/definitions/zksync.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "zksync": ()=>zksync
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/defineChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$chainConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/chainConfig.js [app-ssr] (ecmascript)");
;
;
const zksync = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineChain"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$chainConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainConfig"],
    id: 324,
    name: 'ZKsync Era',
    network: 'zksync-era',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'https://mainnet.era.zksync.io'
            ],
            webSocket: [
                'wss://mainnet.era.zksync.io/ws'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://era.zksync.network/',
            apiUrl: 'https://api-era.zksync.network/api'
        },
        native: {
            name: 'ZKsync Explorer',
            url: 'https://explorer.zksync.io/',
            apiUrl: 'https://block-explorer-api.mainnet.zksync.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xF9cda624FBC7e059355ce98a31693d299FACd963'
        },
        universalSignatureVerifier: {
            address: '0xfB688330379976DA81eB64Fe4BF50d7401763B9C',
            blockCreated: 45659388
        }
    }
}); //# sourceMappingURL=zksync.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/chains/definitions/celoAlfajores.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "celoAlfajores": ()=>celoAlfajores
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$chainConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/chainConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/chain/defineChain.js [app-ssr] (ecmascript)");
;
;
const sourceId = 17000; // holsky
const celoAlfajores = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineChain"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$chainConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainConfig"],
    id: 44_787,
    name: 'Alfajores',
    nativeCurrency: {
        decimals: 18,
        name: 'CELO',
        symbol: 'A-CELO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://alfajores-forno.celo-testnet.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Celo Alfajores Explorer',
            url: 'https://celo-alfajores.blockscout.com',
            apiUrl: 'https://celo-alfajores.blockscout.com/api'
        }
    },
    contracts: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$chainConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chainConfig"].contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 14569001
        },
        portal: {
            [sourceId]: {
                address: '0x82527353927d8D069b3B452904c942dA149BA381',
                blockCreated: 2411324
            }
        },
        disputeGameFactory: {
            [sourceId]: {
                address: '0xE28AAdcd9883746c0e5068F58f9ea06027b214cb',
                blockCreated: 2411324
            }
        },
        l2OutputOracle: {
            [sourceId]: {
                address: '0x4a2635e9e4f6e45817b1D402ac4904c1d1752438',
                blockCreated: 2411324
            }
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xD1B0E0581973c9eB7f886967A606b9441A897037',
                blockCreated: 2411324
            }
        }
    },
    testnet: true
}); //# sourceMappingURL=celoAlfajores.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/clients/decorators/public.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "publicActions": ()=>publicActions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAvatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsAvatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsName.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsResolver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/ens/getEnsText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/call.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createAccessList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createBlockFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createBlockFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createContractEventFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createContractEventFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createEventFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createEventFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createPendingTransactionFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateContractGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateContractGas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateFeesPerGas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateGas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBalance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlobBaseFee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlobBaseFee.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlockNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockTransactionCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getBlockTransactionCount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getCode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getContractEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getContractEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getEip712Domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getEip712Domain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFeeHistory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFeeHistory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFilterChanges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterLogs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getFilterLogs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getGasPrice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getLogs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getProof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getProof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getStorageAt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getStorageAt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionConfirmations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransactionConfirmations.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/getTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/multicall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/readContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/simulateBlocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/simulateCalls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/simulateContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/uninstallFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/verifyMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/verifyTypedData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchBlockNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchBlocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchContractEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchPendingTransactions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/public/watchPendingTransactions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$siwe$2f$verifySiweMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/siwe/verifySiweMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/actions/wallet/sendRawTransaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function publicActions(client) {
    return {
        call: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["call"])(client, args),
        createAccessList: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAccessList"])(client, args),
        createBlockFilter: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createBlockFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBlockFilter"])(client),
        createContractEventFilter: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createContractEventFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContractEventFilter"])(client, args),
        createEventFilter: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createEventFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventFilter"])(client, args),
        createPendingTransactionFilter: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$createPendingTransactionFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPendingTransactionFilter"])(client),
        estimateContractGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateContractGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateContractGas"])(client, args),
        estimateGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateGas"])(client, args),
        getBalance: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBalance"])(client, args),
        getBlobBaseFee: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlobBaseFee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlobBaseFee"])(client),
        getBlock: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlock"])(client, args),
        getBlockNumber: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockNumber"])(client, args),
        getBlockTransactionCount: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getBlockTransactionCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBlockTransactionCount"])(client, args),
        getBytecode: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCode"])(client, args),
        getChainId: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChainId"])(client),
        getCode: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCode"])(client, args),
        getContractEvents: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getContractEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractEvents"])(client, args),
        getEip712Domain: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getEip712Domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEip712Domain"])(client, args),
        getEnsAddress: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnsAddress"])(client, args),
        getEnsAvatar: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsAvatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnsAvatar"])(client, args),
        getEnsName: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsName$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnsName"])(client, args),
        getEnsResolver: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnsResolver"])(client, args),
        getEnsText: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$ens$2f$getEnsText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnsText"])(client, args),
        getFeeHistory: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFeeHistory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeeHistory"])(client, args),
        estimateFeesPerGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateFeesPerGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateFeesPerGas"])(client, args),
        getFilterChanges: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFilterChanges"])(client, args),
        getFilterLogs: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getFilterLogs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFilterLogs"])(client, args),
        getGasPrice: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getGasPrice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGasPrice"])(client),
        getLogs: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getLogs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLogs"])(client, args),
        getProof: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getProof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProof"])(client, args),
        estimateMaxPriorityFeePerGas: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$estimateMaxPriorityFeePerGas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateMaxPriorityFeePerGas"])(client, args),
        getStorageAt: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getStorageAt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorageAt"])(client, args),
        getTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransaction"])(client, args),
        getTransactionConfirmations: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionConfirmations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionConfirmations"])(client, args),
        getTransactionCount: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionCount"])(client, args),
        getTransactionReceipt: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionReceipt"])(client, args),
        multicall: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$multicall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["multicall"])(client, args),
        prepareTransactionRequest: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$prepareTransactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareTransactionRequest"])(client, args),
        readContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])(client, args),
        sendRawTransaction: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendRawTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sendRawTransaction"])(client, args),
        simulate: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simulateBlocks"])(client, args),
        simulateBlocks: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simulateBlocks"])(client, args),
        simulateCalls: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simulateCalls"])(client, args),
        simulateContract: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$simulateContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["simulateContract"])(client, args),
        verifyMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyMessage"])(client, args),
        verifySiweMessage: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$siwe$2f$verifySiweMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifySiweMessage"])(client, args),
        verifyTypedData: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$verifyTypedData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyTypedData"])(client, args),
        uninstallFilter: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$uninstallFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uninstallFilter"])(client, args),
        waitForTransactionReceipt: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$waitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForTransactionReceipt"])(client, args),
        watchBlocks: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchBlocks"])(client, args),
        watchBlockNumber: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchBlockNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchBlockNumber"])(client, args),
        watchContractEvent: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchContractEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchContractEvent"])(client, args),
        watchEvent: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchEvent"])(client, args),
        watchPendingTransactions: (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$watchPendingTransactions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["watchPendingTransactions"])(client, args)
    };
} //# sourceMappingURL=public.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/clients/createClient.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createClient": ()=>createClient,
    "rpcSchema": ()=>rpcSchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/uid.js [app-ssr] (ecmascript)");
;
;
function createClient(parameters) {
    const { batch, chain, ccipRead, key = 'base', name = 'Base Client', type = 'base' } = parameters;
    const experimental_blockTag = parameters.experimental_blockTag ?? (typeof chain?.experimental_preconfirmationTime === 'number' ? 'pending' : undefined);
    const blockTime = chain?.blockTime ?? 12_000;
    const defaultPollingInterval = Math.min(Math.max(Math.floor(blockTime / 2), 500), 4_000);
    const pollingInterval = parameters.pollingInterval ?? defaultPollingInterval;
    const cacheTime = parameters.cacheTime ?? pollingInterval;
    const account = parameters.account ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.account) : undefined;
    const { config, request, value } = parameters.transport({
        chain,
        pollingInterval
    });
    const transport = {
        ...config,
        ...value
    };
    const client = {
        account,
        batch,
        cacheTime,
        ccipRead,
        chain,
        key,
        name,
        pollingInterval,
        request,
        transport,
        type,
        uid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])(),
        ...experimental_blockTag ? {
            experimental_blockTag
        } : {}
    };
    function extend(base) {
        return (extendFn)=>{
            const extended = extendFn(base);
            for(const key in client)delete extended[key];
            const combined = {
                ...base,
                ...extended
            };
            return Object.assign(combined, {
                extend: extend(combined)
            });
        };
    }
    return Object.assign(client, {
        extend: extend(client)
    });
}
function rpcSchema() {
    return null;
} //# sourceMappingURL=createClient.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/clients/transports/createTransport.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createTransport": ()=>createTransport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$buildRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/buildRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/uid.js [app-ssr] (ecmascript)");
;
;
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$uid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"])();
    return {
        config: {
            key,
            methods,
            name,
            request,
            retryCount,
            retryDelay,
            timeout,
            type
        },
        request: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$buildRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRequest"])(request, {
            methods,
            retryCount,
            retryDelay,
            uid
        }),
        value
    };
} //# sourceMappingURL=createTransport.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "custom": ()=>custom
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/clients/transports/createTransport.js [app-ssr] (ecmascript)");
;
function custom(provider, config = {}) {
    const { key = 'custom', methods, name = 'Custom Provider', retryDelay } = config;
    return ({ retryCount: defaultRetryCount })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            methods,
            name,
            request: provider.request.bind(provider),
            retryCount: config.retryCount ?? defaultRetryCount,
            retryDelay,
            type: 'custom'
        });
} //# sourceMappingURL=custom.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "http": ()=>http
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/request.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/transport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/promise/createBatchScheduler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/rpc/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/clients/transports/createTransport.js [app-ssr] (ecmascript)");
;
;
;
;
;
function http(/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */ url, config = {}) {
    const { batch, fetchOptions, key = 'http', methods, name = 'HTTP JSON-RPC', onFetchRequest, onFetchResponse, retryDelay, raw } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const { batchSize = 1000, wait = 0 } = typeof batch === 'object' ? batch : {};
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.http[0];
        if (!url_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UrlRequiredError"]();
        const rpcClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHttpRpcClient"])(url_, {
            fetchOptions,
            onRequest: onFetchRequest,
            onResponse: onFetchResponse,
            timeout
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const { schedule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$createBatchScheduler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBatchScheduler"])({
                    id: url_,
                    wait,
                    shouldSplitBatch (requests) {
                        return requests.length > batchSize;
                    },
                    fn: (body)=>rpcClient.request({
                            body
                        }),
                    sort: (a, b)=>a.id - b.id
                });
                const fn = async (body)=>batch ? schedule(body) : [
                        await rpcClient.request({
                            body
                        })
                    ];
                const [{ error, result }] = await fn(body);
                if (raw) return {
                    error,
                    result
                };
                if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RpcRequestError"]({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'http'
        }, {
            fetchOptions,
            url: url_
        });
    };
} //# sourceMappingURL=http.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "gasPerPubdataDefault": ()=>gasPerPubdataDefault,
    "maxBytecodeSize": ()=>maxBytecodeSize,
    "requiredL1ToL2GasPerPubdataLimit": ()=>requiredL1ToL2GasPerPubdataLimit
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
;
const gasPerPubdataDefault = 50000n;
const maxBytecodeSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint16"] * 32n;
const requiredL1ToL2GasPerPubdataLimit = 800n; //# sourceMappingURL=number.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/formatters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatters": ()=>formatters
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const formatters = {
    block: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineBlock"])({
        format (args) {
            const transactions = args.transactions?.map((transaction)=>{
                if (typeof transaction === 'string') return transaction;
                const formatted = formatters.transaction?.format(transaction);
                if (formatted.typeHex === '0x71') formatted.type = 'eip712';
                else if (formatted.typeHex === '0xff') formatted.type = 'priority';
                return formatted;
            });
            return {
                l1BatchNumber: args.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchNumber) : null,
                l1BatchTimestamp: args.l1BatchTimestamp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchTimestamp) : null,
                transactions
            };
        }
    }),
    transaction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransaction"])({
        format (args) {
            const transaction = {};
            if (args.type === '0x71') transaction.type = 'eip712';
            else if (args.type === '0xff') transaction.type = 'priority';
            return {
                ...transaction,
                l1BatchNumber: args.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchNumber) : null,
                l1BatchTxIndex: args.l1BatchTxIndex ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchTxIndex) : null
            };
        }
    }),
    transactionReceipt: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransactionReceipt"])({
        format (args) {
            return {
                l1BatchNumber: args.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchNumber) : null,
                l1BatchTxIndex: args.l1BatchTxIndex ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.l1BatchTxIndex) : null,
                logs: args.logs.map((log)=>{
                    return {
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLog"])(log),
                        l1BatchNumber: log.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(log.l1BatchNumber) : null,
                        transactionLogIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToNumber"])(log.transactionLogIndex),
                        logType: log.logType
                    };
                }),
                l2ToL1Logs: args.l2ToL1Logs.map((l2ToL1Log)=>{
                    return {
                        blockNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.blockHash),
                        blockHash: l2ToL1Log.blockHash,
                        l1BatchNumber: l2ToL1Log.l1BatchNumber ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.l1BatchNumber) : null,
                        transactionIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.transactionIndex),
                        shardId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.shardId),
                        isService: l2ToL1Log.isService,
                        sender: l2ToL1Log.sender,
                        key: l2ToL1Log.key,
                        value: l2ToL1Log.value,
                        transactionHash: l2ToL1Log.transactionHash,
                        logIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(l2ToL1Log.logIndex)
                    };
                })
            };
        }
    }),
    transactionRequest: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransactionRequest"])({
        exclude: [
            'customSignature',
            'factoryDeps',
            'gasPerPubdata',
            'paymaster',
            'paymasterInput'
        ],
        format (args) {
            if (args.gasPerPubdata || args.paymaster && args.paymasterInput || args.factoryDeps || args.customSignature) return {
                eip712Meta: {
                    ...args.gasPerPubdata ? {
                        gasPerPubdata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(args.gasPerPubdata)
                    } : {
                        gasPerPubdata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gasPerPubdataDefault"])
                    },
                    ...args.paymaster && args.paymasterInput ? {
                        paymasterParams: {
                            paymaster: args.paymaster,
                            paymasterInput: Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(args.paymasterInput))
                        }
                    } : {},
                    ...args.factoryDeps ? {
                        factoryDeps: args.factoryDeps.map((dep)=>Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(dep)))
                    } : {},
                    ...args.customSignature ? {
                        customSignature: Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBytes"])(args.customSignature))
                    } : {}
                },
                type: '0x71'
            };
            return {};
        }
    })
}; //# sourceMappingURL=formatters.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/errors/transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "InvalidEip712TransactionError": ()=>InvalidEip712TransactionError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
;
class InvalidEip712TransactionError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super([
            'Transaction is not an EIP712 transaction.',
            '',
            'Transaction must:',
            '  - include `type: "eip712"`',
            '  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`'
        ].join('\n'), {
            name: 'InvalidEip712TransactionError'
        });
    }
} //# sourceMappingURL=transaction.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/isEip712Transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isEIP712Transaction": ()=>isEIP712Transaction
});
function isEIP712Transaction(transaction) {
    if (transaction.type === 'eip712') return true;
    if ('customSignature' in transaction && transaction.customSignature || 'paymaster' in transaction && transaction.paymaster || 'paymasterInput' in transaction && transaction.paymasterInput || 'gasPerPubdata' in transaction && typeof transaction.gasPerPubdata === 'bigint' || 'factoryDeps' in transaction && transaction.factoryDeps) return true;
    return false;
} //# sourceMappingURL=isEip712Transaction.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/assertEip712Transaction.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "assertEip712Transaction": ()=>assertEip712Transaction
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/errors/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$isEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/isEip712Transaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function assertEip712Transaction(transaction) {
    const { chainId, to, from, paymaster, paymasterInput } = transaction;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$isEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEIP712Transaction"])(transaction)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidEip712TransactionError"]();
    if (!chainId || chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (from && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(from)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: from
    });
    if (paymaster && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(paymaster)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: paymaster
    });
    if (paymaster && !paymasterInput) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`paymasterInput` must be provided when `paymaster` is defined');
    }
    if (!paymaster && paymasterInput) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`paymaster` must be provided when `paymasterInput` is defined');
    }
} //# sourceMappingURL=assertEip712Transaction.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/serializers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serializeTransaction": ()=>serializeTransaction,
    "serializers": ()=>serializers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$assertEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/assertEip712Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$isEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/isEip712Transaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function serializeTransaction(transaction, signature) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$isEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEIP712Transaction"])(transaction)) return serializeTransactionEIP712(transaction);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction, signature);
}
const serializers = {
    transaction: serializeTransaction
};
function serializeTransactionEIP712(transaction) {
    const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$assertEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEip712Transaction"])(transaction);
    const serializedTransaction = [
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(''),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(''),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        from ?? '0x',
        gasPerPubdata ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gasPerPubdata) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gasPerPubdataDefault"]),
        factoryDeps ?? [],
        customSignature ?? '0x',
        paymaster && paymasterInput ? [
            paymaster,
            paymasterInput
        ] : []
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x71',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
} //# sourceMappingURL=serializers.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/errors/bytecode.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BytecodeLengthExceedsMaxSizeError": ()=>BytecodeLengthExceedsMaxSizeError,
    "BytecodeLengthInWordsMustBeOddError": ()=>BytecodeLengthInWordsMustBeOddError,
    "BytecodeLengthMustBeDivisibleBy32Error": ()=>BytecodeLengthMustBeDivisibleBy32Error
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
;
class BytecodeLengthExceedsMaxSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenLength, maxBytecodeSize }){
        super(`Bytecode cannot be longer than ${maxBytecodeSize} bytes. Given length: ${givenLength}`, {
            name: 'BytecodeLengthExceedsMaxSizeError'
        });
    }
}
class BytecodeLengthInWordsMustBeOddError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenLengthInWords }){
        super(`Bytecode length in 32-byte words must be odd. Given length in words: ${givenLengthInWords}`, {
            name: 'BytecodeLengthInWordsMustBeOddError'
        });
    }
}
class BytecodeLengthMustBeDivisibleBy32Error extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ givenLength }){
        super(`The bytecode length in bytes must be divisible by 32. Given length: ${givenLength}`, {
            name: 'BytecodeLengthMustBeDivisibleBy32Error'
        });
    }
} //# sourceMappingURL=bytecode.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/hashBytecode.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "hashBytecode": ()=>hashBytecode
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/pad.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toBytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/hash/sha256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/errors/bytecode.js [app-ssr] (ecmascript)");
;
;
;
;
;
function hashBytecode(bytecode) {
    const bytecodeBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(bytecode);
    if (bytecodeBytes.length % 32 !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytecodeLengthMustBeDivisibleBy32Error"]({
        givenLength: bytecodeBytes.length
    });
    if (bytecodeBytes.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxBytecodeSize"]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytecodeLengthExceedsMaxSizeError"]({
        givenLength: bytecodeBytes.length,
        maxBytecodeSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxBytecodeSize"]
    });
    const hashStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"])(bytecodeBytes);
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(hashStr);
    // Note that the length of the bytecode
    // should be provided in 32-byte words.
    const bytecodeLengthInWords = bytecodeBytes.length / 32;
    if (bytecodeLengthInWords % 2 === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$errors$2f$bytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytecodeLengthInWordsMustBeOddError"]({
            givenLengthInWords: bytecodeLengthInWords
        });
    }
    const bytecodeLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(bytecodeLengthInWords);
    // The bytecode should always take the first 2 bytes of the bytecode hash,
    // so we pad it from the left in case the length is smaller than 2 bytes.
    const bytecodeLengthPadded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$pad$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(bytecodeLength, {
        size: 2
    });
    const codeHashVersion = new Uint8Array([
        1,
        0
    ]);
    hash.set(codeHashVersion, 0);
    hash.set(bytecodeLengthPadded, 2);
    return hash;
} //# sourceMappingURL=hashBytecode.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/getEip712Domain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getEip712Domain": ()=>getEip712Domain
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$assertEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/assertEip712Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$hashBytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/hashBytecode.js [app-ssr] (ecmascript)");
;
;
;
;
const getEip712Domain = (transaction)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$assertEip712Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertEip712Transaction"])(transaction);
    const message = transactionToMessage(transaction);
    return {
        domain: {
            name: 'zkSync',
            version: '2',
            chainId: transaction.chainId
        },
        types: {
            Transaction: [
                {
                    name: 'txType',
                    type: 'uint256'
                },
                {
                    name: 'from',
                    type: 'uint256'
                },
                {
                    name: 'to',
                    type: 'uint256'
                },
                {
                    name: 'gasLimit',
                    type: 'uint256'
                },
                {
                    name: 'gasPerPubdataByteLimit',
                    type: 'uint256'
                },
                {
                    name: 'maxFeePerGas',
                    type: 'uint256'
                },
                {
                    name: 'maxPriorityFeePerGas',
                    type: 'uint256'
                },
                {
                    name: 'paymaster',
                    type: 'uint256'
                },
                {
                    name: 'nonce',
                    type: 'uint256'
                },
                {
                    name: 'value',
                    type: 'uint256'
                },
                {
                    name: 'data',
                    type: 'bytes'
                },
                {
                    name: 'factoryDeps',
                    type: 'bytes32[]'
                },
                {
                    name: 'paymasterInput',
                    type: 'bytes'
                }
            ]
        },
        primaryType: 'Transaction',
        message: message
    };
};
//////////////////////////////////////////////////////////////////////////////
// Utilities
function transactionToMessage(transaction) {
    const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
    return {
        txType: 113n,
        from: BigInt(from),
        to: to ? BigInt(to) : 0n,
        gasLimit: gas ?? 0n,
        gasPerPubdataByteLimit: gasPerPubdata ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gasPerPubdataDefault"],
        maxFeePerGas: maxFeePerGas ?? 0n,
        maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
        paymaster: paymaster ? BigInt(paymaster) : 0n,
        nonce: nonce ? BigInt(nonce) : 0n,
        value: value ?? 0n,
        data: data ?? '0x',
        factoryDeps: factoryDeps?.map((dep)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$hashBytecode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashBytecode"])(dep))) ?? [],
        paymasterInput: paymasterInput ? paymasterInput : '0x'
    };
} //# sourceMappingURL=getEip712Domain.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/chainConfig.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "chainConfig": ()=>chainConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/serializers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$getEip712Domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/zksync/utils/getEip712Domain.js [app-ssr] (ecmascript)");
;
;
;
const chainConfig = {
    blockTime: 1_000,
    formatters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"],
    serializers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializers"],
    custom: {
        getEip712Domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$zksync$2f$utils$2f$getEip712Domain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEip712Domain"]
    }
}; //# sourceMappingURL=chainConfig.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/op-stack/contracts.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Predeploy contracts for OP Stack.
 * @see https://github.com/ethereum-optimism/optimism/blob/develop/specs/predeploys.md
 */ __turbopack_context__.s({
    "contracts": ()=>contracts
});
const contracts = {
    gasPriceOracle: {
        address: '0x420000000000000000000000000000000000000F'
    },
    l1Block: {
        address: '0x4200000000000000000000000000000000000015'
    },
    l2CrossDomainMessenger: {
        address: '0x4200000000000000000000000000000000000007'
    },
    l2Erc721Bridge: {
        address: '0x4200000000000000000000000000000000000014'
    },
    l2StandardBridge: {
        address: '0x4200000000000000000000000000000000000010'
    },
    l2ToL1MessagePasser: {
        address: '0x4200000000000000000000000000000000000016'
    }
}; //# sourceMappingURL=contracts.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/op-stack/serializers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "assertTransactionDeposit": ()=>assertTransactionDeposit,
    "serializeTransaction": ()=>serializeTransaction,
    "serializers": ()=>serializers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function serializeTransaction(transaction, signature) {
    if (isDeposit(transaction)) return serializeTransactionDeposit(transaction);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction, signature);
}
const serializers = {
    transaction: serializeTransaction
};
function serializeTransactionDeposit(transaction) {
    assertTransactionDeposit(transaction);
    const { sourceHash, data, from, gas, isSystemTx, mint, to, value } = transaction;
    const serializedTransaction = [
        sourceHash,
        from,
        to ?? '0x',
        mint ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(mint) : '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        isSystemTx ? '0x1' : '0x',
        data ?? '0x'
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x7e',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
function isDeposit(transaction) {
    if (transaction.type === 'deposit') return true;
    if (typeof transaction.sourceHash !== 'undefined') return true;
    return false;
}
function assertTransactionDeposit(transaction) {
    const { from, to } = transaction;
    if (from && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(from)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: from
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
} //# sourceMappingURL=serializers.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/fees.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "fees": ()=>fees
});
const fees = {
    /*
     * Estimates the fees per gas for a transaction.
  
     * If the transaction is to be paid in a token (feeCurrency is present) then the fees
     * are estimated in the value of the token. Otherwise falls back to the default
     * estimation by returning null.
     *
     * @param params fee estimation function parameters
     */ estimateFeesPerGas: async (params)=>{
        if (!params.request?.feeCurrency) return null;
        const [gasPrice, maxPriorityFeePerGas] = await Promise.all([
            estimateFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
            estimateMaxPriorityFeePerGasInFeeCurrency(params.client, params.request.feeCurrency)
        ]);
        // eth_gasPrice for cel2 returns baseFeePerGas + maxPriorityFeePerGas
        const maxFeePerGas = params.multiply(gasPrice - maxPriorityFeePerGas) + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
};
/*
 * Estimate the fee per gas in the value of the fee token

 *
 * @param client - Client to use
 * @param feeCurrency -  Address of a whitelisted fee token
 * @returns The fee per gas in wei in the value of the  fee token
 *
 */ async function estimateFeePerGasInFeeCurrency(client, feeCurrency) {
    const fee = await client.request({
        method: 'eth_gasPrice',
        params: [
            feeCurrency
        ]
    });
    return BigInt(fee);
}
/*
 * Estimate the max priority fee per gas in the value of the fee token

 *
 * @param client - Client to use
 * @param feeCurrency -  Address of a whitelisted fee token
 * @returns The fee per gas in wei in the value of the  fee token
 *
 */ async function estimateMaxPriorityFeePerGasInFeeCurrency(client, feeCurrency) {
    const feesPerGas = await client.request({
        method: 'eth_maxPriorityFeePerGas',
        params: [
            feeCurrency
        ]
    });
    return BigInt(feesPerGas);
} //# sourceMappingURL=fees.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "isCIP64": ()=>isCIP64,
    "isEIP1559": ()=>isEIP1559,
    "isEmpty": ()=>isEmpty,
    "isPresent": ()=>isPresent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/trim.js [app-ssr] (ecmascript)");
;
function isEmpty(value) {
    return value === 0 || value === 0n || value === undefined || value === null || value === '0' || value === '' || typeof value === 'string' && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(value).toLowerCase() === '0x' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trim"])(value).toLowerCase() === '0x00');
}
function isPresent(value) {
    return !isEmpty(value);
}
function isEIP1559(transaction) {
    return typeof transaction.maxFeePerGas !== 'undefined' && typeof transaction.maxPriorityFeePerGas !== 'undefined';
}
function isCIP64(transaction) {
    /*
     * Enable end user to force the tx to be considered as a CIP-64.
     *
     * The preliminary type will be determined as "eip1559" by src/utils/transaction/getTransactionType.ts
     * and so we need the logic below to check for the specific value instead of checking if just any
     * transaction type is provided. If that's anything else than "cip64" then we need to reevaluate the
     * type based on the transaction fields.
     *
     * Modify with caution and according to https://github.com/celo-org/celo-proposals/blob/master/CIPs/cip-0064.md
     */ if (transaction.type === 'cip64') {
        return true;
    }
    return isEIP1559(transaction) && isPresent(transaction.feeCurrency);
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/formatters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "formatters": ()=>formatters
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/fromHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/block.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const formatters = {
    block: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineBlock"])({
        format (args) {
            const transactions = args.transactions?.map((transaction)=>{
                if (typeof transaction === 'string') return transaction;
                const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction);
                return {
                    ...formatted,
                    ...transaction.gatewayFee ? {
                        gatewayFee: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(transaction.gatewayFee),
                        gatewayFeeRecipient: transaction.gatewayFeeRecipient
                    } : {},
                    feeCurrency: transaction.feeCurrency
                };
            });
            return {
                transactions
            };
        }
    }),
    transaction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransaction"])({
        format (args) {
            if (args.type === '0x7e') return {
                isSystemTx: args.isSystemTx,
                mint: args.mint ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.mint) : undefined,
                sourceHash: args.sourceHash,
                type: 'deposit'
            };
            const transaction = {
                feeCurrency: args.feeCurrency
            };
            if (args.type === '0x7b') transaction.type = 'cip64';
            else {
                if (args.type === '0x7c') transaction.type = 'cip42';
                transaction.gatewayFee = args.gatewayFee ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.gatewayFee) : null;
                transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
            }
            return transaction;
        }
    }),
    transactionRequest: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineTransactionRequest"])({
        format (args) {
            const request = {};
            if (args.feeCurrency) request.feeCurrency = args.feeCurrency;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCIP64"])(args)) request.type = '0x7b';
            return request;
        }
    })
}; //# sourceMappingURL=formatters.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/serializers.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "assertTransactionCIP42": ()=>assertTransactionCIP42,
    "assertTransactionCIP64": ()=>assertTransactionCIP64,
    "serializeTransaction": ()=>serializeTransaction,
    "serializers": ()=>serializers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/constants/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/base.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/chain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/errors/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/op-stack/serializers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/address/isAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/data/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/encoding/toRlp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/serializeAccessList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function serializeTransaction(transaction, signature) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCIP64"])(transaction)) return serializeTransactionCIP64(transaction, signature);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction, signature);
}
const serializers = {
    transaction: serializeTransaction
};
function serializeTransactionCIP64(transaction, signature) {
    assertTransactionCIP64(transaction);
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data } = transaction;
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList),
        feeCurrency,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toYParitySignatureArray"])(transaction, signature)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x7b',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
// maxFeePerGas must be less than maxUint256
const MAX_MAX_FEE_PER_GAS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxUint256"];
function assertTransactionCIP42(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency, gatewayFee, gatewayFeeRecipient } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (gasPrice) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`gasPrice` is not a valid CIP-42 Transaction attribute.');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxPriorityFeePerGas) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFee) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFeeRecipient) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFeeRecipient) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFee)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`gatewayFee` and `gatewayFeeRecipient` must be provided together.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(feeCurrency) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` MUST be a token address for CIP-42 transactions.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFeeRecipient) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(gatewayFeeRecipient)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"](gatewayFeeRecipient);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(feeCurrency) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFeeRecipient)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.');
    }
}
function assertTransactionCIP64(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (gasPrice) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`gasPrice` is not a valid CIP-64 Transaction attribute.');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxPriorityFeePerGas) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPresent"])(feeCurrency) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` MUST be a token address for CIP-64 transactions.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEmpty"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` must be provided for CIP-64 transactions.');
    }
} //# sourceMappingURL=serializers.js.map
}),
"[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/chainConfig.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "chainConfig": ()=>chainConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/op-stack/contracts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/fees.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/formatters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/viem@2.33.2_bufferutil@4.0.9_typescript@5.9.2_utf-8-validate@5.0.10_zod@3.22.4/node_modules/viem/_esm/celo/serializers.js [app-ssr] (ecmascript)");
;
;
;
;
const chainConfig = {
    blockTime: 1_000,
    contracts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$contracts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contracts"],
    formatters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$formatters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatters"],
    serializers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$serializers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializers"],
    fees: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$viem$40$2$2e$33$2e$2_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$2_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$3$2e$22$2e$4$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$fees$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fees"]
}; //# sourceMappingURL=chainConfig.js.map
}),

};

//# sourceMappingURL=89179_viem__esm_2055dff3._.js.map