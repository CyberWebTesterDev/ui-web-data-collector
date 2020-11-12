import React from "react";
import "./code-styles.css";
import { ProcessCodeText } from "./test-text-processor";

export const TestCodeContainer = () => {
  const rawCodeExample = `function multiply(x, y) { 
   return x * y; 
} 
function  printSquare(x) { 
  const s = multiply(x, x); 
  console.log(s); 
} 
printSquare(5);
//комментарий`;

  const rawCodeExample2 = `
    const obj = {p: 42, q: true};
    const {p, q} = obj;
    //можно задать новые имена
    var {p: foo, q: bar} = obj;
    console.log(foo); // 42
    console.log(bar); // true 
    //можно задать значения по умолчанию
    const obj = {p: 42, q: true};
    const {p, q, c = 'default'} = obj;`;

  return (
    <div className="code-container">
      <div className="article-code">
        <span className="first-level-header">
          # Основные сведения о JavaScript
        </span>
        <br />
        <br />
        <p>
          JavaScript - однопоточный (один стек вызовов) (однако, в некотором
          контексте можно считать, что у него есть более одного потока)
          интерпретируемый (исполняется на ходу) язык программирования, в
          основном событийно-ориентированного типа с инструментами ООП и со
          значительном функционально-ориентированным уклоном.
          <br />
          <br />
          <span className="second-level-header">## Движки JavaScript</span>
        </p>
        Краткие сведения в движках JS.
        <br />
        <p>
          <span className="detailed-plain-text">JavaScript-движок</span> — это
          программа, или, другими словами, интерпретатор, выполняющий код,
          написанный на JavaScript. Движок может быть реализован с
          использованием различных подходов: в виде обычного интерпретатора, в
          виде динамического компилятора (или JIT-компилятора), который, перед
          выполнением программы, преобразует исходный код на JS в байт-код
          некоего формата.
        </p>
        <p>
          Наиболее популярные JS-движки: V8 (Google), Rhino (Mozilla
          Foundation), SpiderMonkey (Firefox)
        </p>
        <p>
          <span className="second-level-header">
            ## Цикл событий | Event Loop
          </span>
        </p>
        <p>
          Код в <span className="detailed-specific-text">JavaScript</span>{" "}
          исполняется в режиме{" "}
          <span className="detailed-specific-text">Event Loop</span>. Т.е. в
          один из моментов времени может выполняться только одна операция,
          остальные же ждут своей очереди в так называемом цикле событий{" "}
          <span className="detailed-specific-text">Event Loop</span>. В момент
          исполнения определенной функции она блокирует работу остальных,
          поэтому часто, когда функция ожидает, например, ответа от стороннего
          сервера в JS-приложениях используют асинхронные функции, т.е. работа
          приложения не блокируется, а функция ожидающая ответа продолжит свое
          выполнение после того как получит ответ. Таким образом, в некий момент
          времени он может выполнять лишь какую-то одну задачу.
        </p>
        <p>
          Код JS не исполняется в изоляции. Его{" "}
          <span className="detailed-plain-text">собственный</span> код
          выполняется внутри некоего окружения, которым, для большинства
          разработчиков, является либо браузер, либо Node.js.
        </p>
        Движок JavaScript <span className="colored-plain-text">V8</span> от
        Google — это широко известный JS-движок. Он используется, например, в
        браузере Chrome и в Node.js. Вот как его, очень упрощённо, можно
        представить: <br />
        <br />
        <span className="list-italic"> * Heap</span> (куча) — то место, где
        происходит выделение памяти. <br />
        <span className="list-italic"> * Стек вызовов</span> (Call Stack) — то
        место, куда в процессе выполнения кода попадают так называемые стековые
        кадры.
        <br /> <br />
        <span className="detailed-plain-text">Стек вызовов</span> — это
        структура данных, которая, говоря упрощённо, записывает сведения о месте
        в программе, где мы находимся. Если мы переходим в функцию, мы помещаем
        запись о ней в верхнюю часть стека. Когда мы из функции возвращаемся, мы
        вытаскиваем из стека самый верхний элемент и оказываемся там, откуда
        вызывали эту функцию. Это — всё, что умеет стек. Например, возьмем
        следующий блок кода:
        <TestCodeBlock2 />
        <p>
          Когда движок только начинает выполнять этот код, стек вызовов пуст.
          После этого происходит следующее:
        </p>
        <span className="list-italic">* Step 1:</span>{" "}
        <span className="code-detailed-plain-text">printSquare(5)</span>{" "}
        *(вызывали функцию)*
        <br />
        <span className="list-italic">* Step 2:</span>{" "}
        <span className="code-detailed-plain-text">
          printSquare(5): multiply(x, x)
        </span>{" "}
        *(вызвали вложенную функцию, при этом находимся в исполнении функции
        printSquare)*
        <br />
        <span className="list-italic">* Step 3:</span>{" "}
        <span className="code-detailed-plain-text">
          printSquare(5): console.log(s)
        </span>{" "}
        *(вызвали вложенную функцию, при этом находимся в исполнении функции
        printSquare)*
        <br />
        <span className="list-italic">* Step 4:</span>{" "}
        <span className="code-detailed-plain-text">printSquare(5)</span>{" "}
        *(вернулись из фунции printSquare)*
        <br />
        <span className="list-italic">* Step 5:</span> *(перешли в блок кода
        после функции)*
        <br />
        <br />
        Каждая запись (в примере выше Step) в стеке вызовов называется стековым
        кадром. На механизме анализа стековых кадров основана информация о стеке
        вызовов, трассировка стека, выдаваемая при возникновении исключения.
        Трассировка стека представляет собой состояние стека в момент
        исключения.
        <br />
        <br />
        <p>
          Здесь расположен блок кода обработанный текстовым обработчиком
          ProcessCodeText:{" "}
        </p>
        <ProcessCodeText rawCode={rawCodeExample} />
      </div>
    </div>
  );
};

const TestCodeBlock = () => {
  return (
    <pre className="code-javascript">
      <span className="key-comment">
        //example of formatted JavaScript Code here
      </span>
      <br />
      <span className="key-declare">let</span>{" "}
      <span className="variables">phrase</span>{" "}
      <span className="key-equal">=</span> 'Hello';
      <br />
      <span className="key-main-words">if</span> (
      <span className="key-bool">true</span>) <span>{`{`}</span> <br />
      &nbsp; <span className="key-declare">let</span>{" "}
      <span className="variables">user</span>{" "}
      <span className="key-equal">=</span> 'John';
      <br />
      &nbsp; <span className="key-functions">alert</span>(`$<span>{`{`}</span>
      <span className="variables">phrase</span>
      <span>{`}`}</span>, $<span>{`{`}</span>
      <span className="variables">user</span>
      <span>{`}`}</span>`);
      <br />
      <span>} </span>
      <span className="key-functions">alert</span>(
      <span className="variables">user</span>);{" "}
      <span className="key-comment">//Error! no such user</span>
    </pre>
  );
};

const TestCodeBlock2 = () => {
  return (
    <pre className="code-javascript">
      <span className="key-declare">function</span>{" "}
      <span className="key-functions">multiply</span>(x, y) {`{`} <br />
      <span className="key-return"> return</span> x * y; <br />
      {`}`} <br />
      <span className="key-declare">function</span>{" "}
      <span className="key-functions">printSquare</span>(x) {`{`} <br />
      <span className="key-variable-declare"> const</span> s ={" "}
      <span className="key-functions">multiply</span>(x, x); <br />
      <span className="key-global-objects"> console</span>.
      <span className="key-methods">log</span>(s); <br />
      {`}`} <br />
      <span className="key-functions">printSquare</span>(5);
    </pre>
  );
};
