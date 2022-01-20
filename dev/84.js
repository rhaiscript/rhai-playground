(this.webpackJsonp=this.webpackJsonp||[]).push([[84],{64:function(n,t,i){"use strict";i.r(t),t.default="const SIZE = 50;\n\nfn new_mat(x, y) {\n    let row = [];\n    row.pad(y, 0.0);\n    \n    let matrix = [];\n    matrix.pad(x, row);\n    \n    matrix\n}\n\nfn mat_gen() {\n    const n = global::SIZE;\n    const tmp = 1.0 / n / n;\n    let m = new_mat(n, n);\n\n    for i in 0..n {\n        for j in 0..n {\n            m[i][j] = tmp * (i - j) * (i + j);\n        }\n    }\n    \n    m\n}\n\nfn mat_mul(a, b) {\n    let b2 = new_mat(a[0].len, b[0].len);\n    \n    for i in 0..a[0].len {\n        for j in 0..b[0].len {\n            b2[j][i] = b[i][j];\n        }\n    }\n\n    let c = new_mat(a.len, b[0].len);\n\n    for i in 0..c.len {\n        for j in 0..c[i].len {\n            c[i][j] = 0.0;\n            \n            for z in 0..a[i].len {\n                c[i][j] += a[i][z] * b2[j][z];\n            }\n        }\n    }\n\n    c\n}\n\nconst now = timestamp();\n\nconst a = mat_gen();\nconst b = mat_gen();\nconst c = mat_mul(a, b);\n\n/*\nfor i in 0..SIZE) {\n    print(c[i]);\n}\n*/\n\nprint(`Finished. Run time = ${now.elapsed} seconds.`);\n"}}]);