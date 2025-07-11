import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [calories, setCalories] = useState(0);
  const [ingredients, setIngredients] = useState([
    { name: "Овсянка", calories: 68, amount: 100, unit: "г" },
    { name: "Банан", calories: 89, amount: 1, unit: "шт" },
    { name: "Молоко", calories: 42, amount: 200, unit: "мл" },
  ]);

  const [eqScore, setEqScore] = useState(0);
  const [memoryScore, setMemoryScore] = useState(0);
  const [currentEqQuestion, setCurrentEqQuestion] = useState(0);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const eqQuestions = [
    {
      question: "Как вы обычно реагируете на критику?",
      options: [
        { text: "Принимаю спокойно и анализирую", score: 4 },
        { text: "Слушаю, но расстраиваюсь", score: 3 },
        { text: "Защищаюсь и спорю", score: 2 },
        { text: "Игнорирую полностью", score: 1 },
      ],
    },
    {
      question: "Что вы делаете при стрессе?",
      options: [
        { text: "Дышу глубоко и ищу решение", score: 4 },
        { text: "Говорю с близкими", score: 3 },
        { text: "Отвлекаюсь на что-то другое", score: 2 },
        { text: "Паникую и нервничаю", score: 1 },
      ],
    },
  ];

  const memoryCards = [
    { id: 1, emoji: "🧠", matched: false },
    { id: 2, emoji: "🧠", matched: false },
    { id: 3, emoji: "💡", matched: false },
    { id: 4, emoji: "💡", matched: false },
    { id: 5, emoji: "🎯", matched: false },
    { id: 6, emoji: "🎯", matched: false },
    { id: 7, emoji: "⚡", matched: false },
    { id: 8, emoji: "⚡", matched: false },
  ];

  const [gameCards, setGameCards] = useState(
    memoryCards.sort(() => Math.random() - 0.5),
  );

  const calculateTotalCalories = () => {
    return ingredients.reduce((total, item) => total + item.calories, 0);
  };

  const healthProducts = [
    {
      name: "Протеиновый коктейль",
      rating: 4.8,
      pros: ["Высокое содержание белка", "Быстрое усвоение", "Удобная форма"],
      cons: ["Высокая цена", "Может содержать искусственные добавки"],
      price: "2500₽",
    },
    {
      name: "Омега-3 капсулы",
      rating: 4.6,
      pros: [
        "Улучшает работу сердца",
        "Поддерживает мозг",
        "Натуральный состав",
      ],
      cons: ["Возможны побочные эффекты", "Требует курсовой прием"],
      price: "1200₽",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Leaf" className="text-green-600" size={24} />
              <h1 className="text-2xl font-bold text-slate-800">
                ЗОЖ-Платформа
              </h1>
            </div>
            <nav className="flex space-x-8">
              <a
                href="#health"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Здоровье
              </a>
              <a
                href="#nutrition"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Питание
              </a>
              <a
                href="#brain"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Мозг
              </a>
              <a
                href="#psychology"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Психология
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Ваш путь к здоровому образу жизни
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Добро пожаловать! Я Татьяна, тренер эмоционального интеллекта,
            нейрофитнеса и фитнеса. Это моя проба пера по управлению изменениями
            образа жизни! Здесь уже есть калькулятор калорий, минутные
            упражнения для сохранения когнитивных навыков, простейшие тесты на
            уровень эмоционального интеллекта и советы по развитию. А дальше
            сайт будет наполняться рецептами, планами питания, статьями по
            приобретению здоровых привычек, психологическими аспектами
            сопротивления им и прочими полезностями. А также обзоры товаров для
            упрощения жизни, способы развития эмоционального интеллекта и
            нейрофитнес для взрослых, детей и подростков. Вопросы, по этим темам
            пишите в соответствующем разделе и я напишу обзор, статью или план
            действий по решению этого вопроса.{" "}
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              Начать сейчас
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="calculator">Калькулятор калорий</TabsTrigger>
            <TabsTrigger value="products">Обзоры товаров</TabsTrigger>
            <TabsTrigger value="eq">Эмоц. интеллект</TabsTrigger>
            <TabsTrigger value="neurofitness">Нейрофитнес</TabsTrigger>
            <TabsTrigger value="materials">Материалы</TabsTrigger>
          </TabsList>

          {/* Калькулятор калорий */}
          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon
                    name="Calculator"
                    className="text-green-600"
                    size={24}
                  />
                  <span>Калькулятор калорий для рецептов</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Ингредиенты</h3>
                    {ingredients.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex-1">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-sm text-gray-600 ml-2">
                            {item.amount} {item.unit}
                          </span>
                        </div>
                        <Badge variant="secondary">{item.calories} ккал</Badge>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить ингредиент
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-blue-50 rounded-lg text-center">
                      <h3 className="text-3xl font-bold text-blue-600 mb-2">
                        {calculateTotalCalories()} ккал
                      </h3>
                      <p className="text-blue-600">Общая калорийность</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Белки</span>
                        <span>24г</span>
                      </div>
                      <Progress value={60} className="h-2" />

                      <div className="flex justify-between text-sm">
                        <span>Жиры</span>
                        <span>8г</span>
                      </div>
                      <Progress value={25} className="h-2" />

                      <div className="flex justify-between text-sm">
                        <span>Углеводы</span>
                        <span>45г</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Обзоры товаров */}
          <TabsContent value="products" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {healthProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <Badge className="bg-green-100 text-green-800">
                        ⭐ {product.rating}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-600">
                          {product.price}
                        </span>
                        <Button size="sm">Подробнее</Button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2 flex items-center">
                            <Icon name="Plus" size={16} className="mr-1" />
                            Плюсы
                          </h4>
                          <ul className="text-sm space-y-1">
                            {product.pros.map((pro, i) => (
                              <li key={i} className="text-gray-600">
                                • {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-red-600 mb-2 flex items-center">
                            <Icon name="Minus" size={16} className="mr-1" />
                            Минусы
                          </h4>
                          <ul className="text-sm space-y-1">
                            {product.cons.map((con, i) => (
                              <li key={i} className="text-gray-600">
                                • {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Эмоциональный интеллект */}
          <TabsContent value="eq" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Brain" className="text-purple-600" size={24} />
                    <span>Тест на эмоциональный интеллект</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {currentEqQuestion < eqQuestions.length ? (
                    <div className="space-y-4">
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>
                            Вопрос {currentEqQuestion + 1} из{" "}
                            {eqQuestions.length}
                          </span>
                          <span>
                            {Math.round(
                              (currentEqQuestion / eqQuestions.length) * 100,
                            )}
                            %
                          </span>
                        </div>
                        <Progress
                          value={(currentEqQuestion / eqQuestions.length) * 100}
                          className="h-2"
                        />
                      </div>

                      <h3 className="text-lg font-semibold mb-4">
                        {eqQuestions[currentEqQuestion].question}
                      </h3>

                      <div className="space-y-2">
                        {eqQuestions[currentEqQuestion].options.map(
                          (option, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              className="w-full justify-start text-left p-4 h-auto"
                              onClick={() => {
                                setEqScore((prev) => prev + option.score);
                                setCurrentEqQuestion((prev) => prev + 1);
                              }}
                            >
                              {option.text}
                            </Button>
                          ),
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold text-purple-600">
                        {eqScore}/{eqQuestions.length * 4}
                      </div>
                      <p className="text-lg">
                        {eqScore >= 7
                          ? "Высокий уровень ЭИ"
                          : eqScore >= 5
                            ? "Средний уровень ЭИ"
                            : "Есть над чем работать"}
                      </p>
                      <Button
                        onClick={() => {
                          setCurrentEqQuestion(0);
                          setEqScore(0);
                        }}
                      >
                        Пройти заново
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Target" className="text-orange-600" size={24} />
                    <span>Упражнения для развития ЭИ</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">
                        Дневник эмоций
                      </h4>
                      <p className="text-sm text-purple-700 mb-3">
                        Записывайте свои эмоции 3 раза в день: утром, днем и
                        вечером
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">
                            Настроение сейчас:
                          </span>
                          <Slider
                            value={[5]}
                            max={10}
                            step={1}
                            className="flex-1"
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Грустно</span>
                          <span>Радостно</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">
                        Техника "4-7-8"
                      </h4>
                      <p className="text-sm text-orange-700 mb-3">
                        Дыхательная техника для управления стрессом
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white p-2 rounded">
                          <div className="text-2xl font-bold text-orange-600">
                            4
                          </div>
                          <div className="text-xs">Вдох</div>
                        </div>
                        <div className="bg-white p-2 rounded">
                          <div className="text-2xl font-bold text-orange-600">
                            7
                          </div>
                          <div className="text-xs">Задержка</div>
                        </div>
                        <div className="bg-white p-2 rounded">
                          <div className="text-2xl font-bold text-orange-600">
                            8
                          </div>
                          <div className="text-xs">Выдох</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Нейрофитнес */}
          <TabsContent value="neurofitness" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Zap" className="text-yellow-600" size={24} />
                    <span>Игра на память</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">
                        Счет: {memoryScore}
                      </div>
                      <p className="text-sm text-gray-600">
                        Найдите пары одинаковых символов
                      </p>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {gameCards.map((card) => (
                        <div
                          key={card.id}
                          className={`aspect-square flex items-center justify-center text-2xl bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors ${
                            selectedCards.includes(card.id) || card.matched
                              ? "bg-yellow-100"
                              : ""
                          }`}
                          onClick={() => {
                            if (
                              !selectedCards.includes(card.id) &&
                              selectedCards.length < 2 &&
                              !card.matched
                            ) {
                              setSelectedCards((prev) => [...prev, card.id]);
                            }
                          }}
                        >
                          {selectedCards.includes(card.id) || card.matched
                            ? card.emoji
                            : "❓"}
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full"
                      onClick={() => {
                        setGameCards(
                          memoryCards.sort(() => Math.random() - 0.5),
                        );
                        setSelectedCards([]);
                        setMemoryScore(0);
                      }}
                    >
                      Новая игра
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon
                      name="TrendingUp"
                      className="text-green-600"
                      size={24}
                    />
                    <span>Программа молодости мозга</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <Icon
                          name="Book"
                          className="text-green-600 mx-auto mb-2"
                          size={32}
                        />
                        <h4 className="font-semibold text-green-800 mb-1">
                          Чтение
                        </h4>
                        <p className="text-xs text-green-700">30 мин/день</p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <Icon
                          name="Puzzle"
                          className="text-blue-600 mx-auto mb-2"
                          size={32}
                        />
                        <h4 className="font-semibold text-blue-800 mb-1">
                          Головоломки
                        </h4>
                        <p className="text-xs text-blue-700">15 мин/день</p>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg text-center">
                        <Icon
                          name="Music"
                          className="text-purple-600 mx-auto mb-2"
                          size={32}
                        />
                        <h4 className="font-semibold text-purple-800 mb-1">
                          Музыка
                        </h4>
                        <p className="text-xs text-purple-700">
                          Изучение инструмента
                        </p>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg text-center">
                        <Icon
                          name="Users"
                          className="text-orange-600 mx-auto mb-2"
                          size={32}
                        />
                        <h4 className="font-semibold text-orange-800 mb-1">
                          Общение
                        </h4>
                        <p className="text-xs text-orange-700">
                          Социальная активность
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Нейропластичность</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Мозг способен изменяться в любом возрасте. Регулярные
                        тренировки создают новые нейронные связи.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Память</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />

                        <div className="flex justify-between text-sm">
                          <span>Внимание</span>
                          <span>72%</span>
                        </div>
                        <Progress value={72} className="h-2" />

                        <div className="flex justify-between text-sm">
                          <span>Скорость мышления</span>
                          <span>68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Материалы */}
          <TabsContent value="materials" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="FileText" className="text-blue-600" size={20} />
                    <span className="text-base">План питания на неделю</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Подробный план питания с расчетом калорий и БЖУ
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon
                      name="Activity"
                      className="text-green-600"
                      size={20}
                    />
                    <span className="text-base">Программа тренировок</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Эффективные упражнения для домашних тренировок
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Brain" className="text-purple-600" size={20} />
                    <span className="text-base">
                      Гайд по эмоциональному интеллекту
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Техники развития эмоционального интеллекта
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Zap" className="text-yellow-600" size={20} />
                    <span className="text-base">Нейрофитнес программа</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Упражнения для тренировки мозга и памяти
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
