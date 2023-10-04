1. Поскольку [] создает новый массив, таким образом, вы сравниваете один объект массива с другим объектом массива. Сравнивается не содержимое массивов, а ссылки на объекты. Они не равны, потому что это не один и тот же экземпляр объекта.
2. В заключение, использование ключевого слова const вместо var в JavaScript имеет как технические, так и человеческие преимущества. С технической точки зрения, использование const позволяет оптимизировать время компиляции и повышает эффективность выполнения. Движки JavaScript могут лучше оптимизировать код, зная, что определенные значения никогда не изменятся. С точки зрения человека, использование const добавляет коду ясности и семантического значения. Это указывает другим разработчикам на то, что определенное значение должно быть постоянным и никогда не изменится. Это может помочь предотвратить ошибки и улучшить читаемость кода. Однако важно отметить, что не вся информация, которая никогда не меняется, должна быть объявлена с помощью const. Если существует возможность изменения значения при различных обстоятельствах, вместо этого целесообразно использовать var.

3. Promise обрабатывается быстрее, чем 0-секундный setTimeout(). Из-за приоритетов цикла обработки событий задания из job queue, в которой есть обратный вызов promise, удаляются из task queue, в которой хранятся обратные вызовы setTimeout().

4. xss или отключить в настройках браузера если разработчик

5. глобальные стили в “index.html ”, файл стилей для каждого компонента, через атрибут style react компонента, свойство style к объекту стиля JavaScript
6. мемоизация с useCallback и useMemo,

7. все, что использует контекст, перерендеривается каждый раз, когда контекст изменяет состояние.

  