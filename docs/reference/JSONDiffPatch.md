---
author: Procube Co.,Ltd.
---

# JSONDiffPatchオブジェクト

JSONDiffPatchオブジェクトは JSON の差分を表すオブジェクトです。

## 仕様

以下の URL で仕様を参照してください。

benjamine / JsonDiffPatch ： [https://github.com/benjamine/JsonDiffPatch](https://github.com/benjamine/JsonDiffPatch)

デモページ ： [http://benjamine.github.io/JsonDiffPatch/demo/index.htm](http://benjamine.github.io/JsonDiffPatch/demo/index.htm)

## 例

displayName 属性の値を foo から bar に変更する場合。

```

    {
    "displayName": [
        "foo",
        "bar"
      ]
    }
```

displayName 属性を追加する場合。追加後の値は bar。

```

   {
   "displayName": [
   "bar"
   ]
   }
```

displayName 属性を削除する場合。削除前の値は foo。

```

   {
   "displayName": [
   "foo",
   0,
   0
   ]
   }
```

配列型の propertyDefinitionList 属性の添字 0 のオブジェクトの displayName を更新する場合。

```

   {
   "propertyDefinitionList": {
   "0": {
   "displayName": [
   "foo",
   "bar"
   ]
   },
   "_t": "a"
   }
   }
```

配列型の propertyDefinitionList 属性の添字 0 にオブジェクトを挿入する場合。

```

   {
   "propertyDefinitionList": {
   "0": [ //添え字は挿入を表す
   {
   "name": "name",
   "displayName": "クラスの名前",
   "type": "string",
   "description": "クラスの識別子となる名前",
   "required": true,
   "unique": true,
   "stringRestriction": "id"
   }
   ],
   "_t": "a" //配列
   }
   }
```

配列型の propertyDefinitionList 属性の添字 0 にオブジェクトを削除する場合。

```

   {
   "propertyDefinitionList": {
   "_t": "a",　//配列
   "_0": [ //アンダーバー+添え字は削除を表す
   {
   "name": "name",
   "displayName": "クラスの名前",
   "type": "string",
   "description": "クラスの識別子となる名前",
   "required": true,
   "unique": true,
   "stringRestriction": "id"
   },
   0,
   0　//0は挿入無しを表すフラグ。
   ]
   }
   }
```

配列型の propertyDefinitionList 属性の添字 1 のオブジェクトを 0 に移動する場合。

```

   {
   "propertyDefinitionList": {
   "_t": "a", // 配列
   "_1": [　//アンダーバー+添え字は削除を表す
   "",　//移動の場合にはここが空文字になる。
   0, //挿入先の添え字
   3 // 3は挿入有を表すフラグ
   ]
   }
   }
   }
```

配列型の propertyDefinitionList 属性の添字 1 のオブジェクトを 0 に移動しかつ移動後の 1 のオブジェクトの displayName 属性を更新する場合。 （ = 移動前の 0 の displayName 属性を更新し、添え字 1 に移動した場合）

```

   {
   "propertyDefinitionList": {
   "1": {
   "displayName": [
   "foo",
   "bar"
   ]
   },
   "_t": "a",
   "_1": [
   "",
   0,
   3
   ]
   }
   }
```
