import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [calories, setCalories] = useState(0);
  const [ingredients, setIngredients] = useState([
    { name: "Овсянка", calories: 68, amount: 100, unit: "г" },
    { name: "Банан", calories: 89, amount: 1, unit: "шт" },
    { name: "Молоко", calories: 42, amount: 200, unit: "мл" },
  ]);

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
                href="#lifestyle"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Образ жизни
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
            Калькулятор калорий, планы питания, обзоры товаров и дашборды для
            принятия правильных решений
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
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="calculator">Калькулятор калорий</TabsTrigger>
            <TabsTrigger value="products">Обзоры товаров</TabsTrigger>
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

          {/* Материалы */}
          <TabsContent value="materials" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
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
                    <Icon name="Heart" className="text-red-500" size={20} />
                    <span className="text-base">Гайд по здоровью</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Основные принципы здорового образа жизни
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
