---
author: Procube Co.,Ltd.
---

# 問い合わせ式

問い合わせ式では mongodb の問い合わせ式を記述できます。ここでは、BNF で文法を示しながら、その意味を説明します。

## 問い合わせ式の形式

問い合わせ式 \(Expressions\) は式 \(Expression\) のリストを "\{" と "\}" で囲んだものです。 リスト内の全ての式が真を返すと、その問い合わせ式が真を返します。

```
Expressions::= ExpressionWithBrackets EOF

ExpressionWithBrackets ::= '{' ExpressionList '}'

ExpressionList ::= Expression | ExpressionList ',' Expression
 
Expression ::= 
  LogicalExpressions | ComparsionExpressions | EqualExpression
```

式には、論理結合式（LogicalExpressions\)、 比較演算式\(ComparsionExpressions\)、値比較式\(EqualExpression\)のいずれかを記述できます。

## 値比較式

値比較式は、属性名\(Name\)で指定された属性の値と属性値（Value）で指定された値を比較し、等しい場合に真を返します。 属性値に 'null' を指定した場合は、値が無い場合に真となります。

```
EqualExpression ::= Field Value

Field ::= Name ':'

Name ::= PROPERTY

Value ::= STRING| NUMBER | Boolean | 'null'

Boolean ::= 'true' | 'false'
```

ここで、PROPERTY にはクラス定義で定義した属性名を指定します。STRING にはダブルクォート\("\)で囲った文字列、NUMBER には数値を指定します。

## 値比較式の例

以下の問い合わせ式で、属性 eduPersonAffiliation が "student" であるユーザのみを抽出することができます。

```
{eduPersonAffiliation: "student"}
```

## 比較演算式

比較演算式は、属性名\(Name\)で指定された属性の値に対して、指定された比較演算\(ComparsionExpression\)を順次適用し、 全ての比較演算が真を返した場合に真を返します。

```
ComparsionExpressions ::= Field '{' ComparsionExpressionList '}'
 
Field ::= Name ':'

ComparsionExpressionList ::= ComparsionExpression | ComparsionExpressionList ',' ComparsionExpression
 
ComparsionExpression ::= ComparisionOperator1 ':' Value | ComparitionOperator2 ':' ArrayValues | ComparitionOperator3 ':' Boolean

ComparisionOperator1 ::= '$gt' | '$gte' | '$lt'| '$lte' | '$ne' | '$regex'

ComparisionOperator2 ::= '$in' | '$nin' | '$all'

ComparisionOperator3 ::= '$exists'

ArrayValues ::= '[' ArrayValue ']'

ArrayValue ::=  | Value | ArrayValue ',' Value
```

ここで、Name, Value の文法定義については、前節「値比較式」を参照してください。 比較演算式は、比較演算子\(ComparisionOperator1, ComparisionOperator2\)によって以下の意味となります。

-   比較演算子に $gt が指定された場合は、属性の値が指定された値（Value）より大きい場合に真を返します。
-   比較演算子に $gte が指定された場合は、属性の値が指定された値（Value）より大きいか等しい場合に真を返します。
-   比較演算子に $lt が指定された場合は、属性の値が指定された値（Value）より小さい場合に真を返します。
-   比較演算子に $lte が指定された場合は、属性の値が指定された値（Value）より小さいか等しい場合に真を返します。
-   比較演算子に $ne が指定された場合は、属性の値が指定された値（Value）と等しくない場合に真を返します。
-   比較演算子に $regexp が指定された場合は、属性の値が指定された正規表現文字列（Value）と照合可能である場合に真を返します。 この場合、Value は文字列式でなければなりません。
-   比較演算子に $in が指定された場合は、属性の値が配列であるか否かにより、以下の意味となります。
    -   属性の値が配列の場合、その配列が、指定された配列（ArrayValues）の要素を一つでも含む場合に真を返します。
    -   属性の値が配列でない場合、その値が、指定された配列（ArrayValues）に含まれる場合に場合真を返します。
-   比較演算子に $nin が指定された場合は、属性の値が無い場合か、 属性の値が、指定された配列（ArrayValues）に含まれない場合に場合真を返します。
-   比較演算子に $all が指定された場合は、属性の値が配列であり、 かつ指定された配列（ArrayValues）の要素を全て含む場合に真を返します。
-   比較演算子に $exists が指定された場合は、指定された値（Boolean）が true であれば属性が存在する場合に、 false であれば属性が存在しない場合に真を返します。

比較演算子で文字列の大小を比較することも可能です。その場合は、文字コードの値による比較となります。

## 論理結合式

論理結合式では、配列 \(ArrayExpressions\) で指定された複数の問い合わせ式の結果を論理演算で結合して、結果を返します。

```
LogicalExpressions ::= OrExpression | AndExpression | NorExpression | NotExpression

OrExpression ::= '$or' ':' ArrayExpressions
 
AndExpression ::= '$and' ':' ArrayExpressions
 
NorExpression ::= '$nor' ':' ArrayExpressions

NotExpression ::= Field　'{'　$not ':' '{' ComparsionExpression '}' '}'
 
Field ::= Name ':'

ArrayExpressions ::= '[' ArrayExpression ']'
 
ArrayExpression ::= ExpressionWithBrackets | ArrayExpression ',' ExpressionWithBrackets
```

ここで、ComparsionExpression の文法定義と意味については、前節「比較演算式」を参照してください。

-   論理和結合式 \(OrExpression\) では、指定された問い合わせ式のいずれかが真を返すと、真を返します。
-   論理積結合式 \(AndExpression\) では、指定された問い合わせ式のすべてが成功すると、真を返します。
-   否定論理和結合式 \(NorExpression\) では、指定された問い合わせ式のすべてが偽を返すと、真を返します。
-   否定式 \(NotExpression\) では、属性名 \(Name\) で指定された属性値に値に対して、指定された比較演算 \(ComparsionExpression\) が偽を返すと、真を返します。

## 複雑な問い合わせ式の例

以下の問い合わせ式で、属性 eduPersonAffiliation が "student" であり、かつ、age が 20 以上か sex が "female" であるユーザを抽出することができます。

```
{eduPersonAffiliation: "student", {$or: [{age: {$gte: 20}}, {sex: "female"}]}}
```

