import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Index = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [selectedNPA, setSelectedNPA] = useState<any>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const npaData = [
    {
      id: 1,
      title: "ГОСТ Р 22.8.17-2025",
      category: "Безопасность в ЧС",
      dateEffective: "01.01.2026",
      description: "Поисково-спасательные работы в условиях разрушенных зданий. Общие положения.",
      isNew: true,
      fullText: "Добавлены подробные требования к организации работ, зонированию, управлению рисками и безопасности спасателей."
    },
    {
      id: 2,
      title: "ГОСТ ISO 18889-2025",
      category: "СИЗ",
      dateEffective: "01.01.2026",
      description: "Перчатки для защиты работников при обращении и контакте с пестицидами.",
      isNew: true,
      fullText: "Введены конкретные критерии для перчаток при работе с пестицидами. Требования к эксплуатационным характеристикам."
    },
    {
      id: 3,
      title: "ГОСТ ISO 11612-2020",
      category: "Спецодежда",
      dateEffective: "01.01.2026",
      description: "Одежда специальная для защиты от кратковременного воздействия открытого пламени.",
      isNew: false,
      fullText: "Введены более точные методы оценки спецодежды от мелкодисперсной пыли и аэрозолей, а также от теплового излучения."
    },
    {
      id: 4,
      title: "Профстандарт «Специалист в области охраны труда»",
      category: "Профстандарты",
      dateEffective: "01.03.2026",
      description: "Новый профессиональный стандарт специалиста по охране труда.",
      isNew: true,
      fullText: "Определяет не только формальные требования к должности, но и роль специалиста внутри организации."
    },
    {
      id: 5,
      title: "ОК 016–2025",
      category: "Классификаторы",
      dateEffective: "01.01.2026",
      description: "Общероссийский классификатор профессий.",
      isNew: true,
      fullText: "Вводится вместо устаревшего ОК 016-94 (приказ Росстандарта от 16.05.2025 №423-ст)."
    },
    {
      id: 6,
      title: "Форма №1-Т «Условия труда»",
      category: "Отчетность",
      dateEffective: "01.01.2026",
      description: "Новая форма отчётности о состоянии условий труда.",
      isNew: true,
      fullText: "Утверждена приказом Росстата от 22.07.2025 №348. Содержит сведения о состоянии условий труда и компенсациях."
    }
  ];

  const templates = [
    { id: 1, title: "Акт о несчастном случае (Н-1)", category: "Акты", icon: "FileText", color: "bg-red-500" },
    { id: 2, title: "Приказ о создании комиссии", category: "Приказы", icon: "Users", color: "bg-blue-500" },
    { id: 3, title: "Приказ о назначении ответственных", category: "Приказы", icon: "UserCheck", color: "bg-blue-500" },
    { id: 4, title: "Приказ о проведении СОУТ", category: "Приказы", icon: "ClipboardCheck", color: "bg-blue-500" },
    { id: 5, title: "Инструкция вводного инструктажа", category: "Инструкции", icon: "BookOpen", color: "bg-green-500" },
    { id: 6, title: "Инструкция по оказанию первой помощи", category: "Инструкции", icon: "Heart", color: "bg-green-500" },
    { id: 7, title: "Программа первичного инструктажа", category: "Программы", icon: "GraduationCap", color: "bg-purple-500" },
    { id: 8, title: "Протокол проверки знаний", category: "Протоколы", icon: "CheckSquare", color: "bg-orange-500" },
    { id: 9, title: "Протокол заседания комиссии", category: "Протоколы", icon: "Clipboard", color: "bg-orange-500" },
    { id: 10, title: "Уведомление о нарушении", category: "Уведомления", icon: "AlertTriangle", color: "bg-yellow-500" },
    { id: 11, title: "Направление на медосмотр", category: "Уведомления", icon: "Stethoscope", color: "bg-teal-500" },
    { id: 12, title: "Предписание об устранении нарушений", category: "Уведомления", icon: "AlertCircle", color: "bg-red-600" }
  ];

  const traumaData = [
    { month: 'Янв', cases: 2, days: 15 },
    { month: 'Фев', cases: 1, days: 8 },
    { month: 'Мар', cases: 3, days: 22 },
    { month: 'Апр', cases: 0, days: 0 },
    { month: 'Май', cases: 2, days: 18 },
    { month: 'Июн', cases: 1, days: 12 }
  ];

  const trainingData = [
    { name: 'Пройдено', value: 156, color: '#0EA5E9' },
    { name: 'В процессе', value: 43, color: '#F97316' },
    { name: 'Просрочено', value: 12, color: '#EF4444' }
  ];

  const courses = [
    { id: 1, title: "Электробезопасность (II группа)", duration: "16 часов", progress: 75, students: 24 },
    { id: 2, title: "Пожарная безопасность", duration: "12 часов", progress: 100, students: 156 },
    { id: 3, title: "Первая помощь", duration: "8 часов", progress: 60, students: 89 },
    { id: 4, title: "Работа на высоте (1 группа)", duration: "24 часа", progress: 30, students: 18 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="ShieldCheck" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SafeWork Pro</h1>
                <p className="text-xs text-gray-500">Система управления охраной труда</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => setActiveModal('npa')} className="hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Icon name="BookOpen" size={18} className="mr-2" />
                База НПА
              </Button>
              <Button variant="ghost" onClick={() => setActiveModal('training')} className="hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Icon name="GraduationCap" size={18} className="mr-2" />
                Обучение
              </Button>
              <Button variant="ghost" onClick={() => setActiveModal('templates')} className="hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Icon name="FileText" size={18} className="mr-2" />
                Документы
              </Button>
              <Button variant="ghost" onClick={() => setActiveModal('analytics')} className="hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Icon name="BarChart3" size={18} className="mr-2" />
                Аналитика
              </Button>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="Plus" size={18} className="mr-2" />
              Создать документ
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Упростите работу по охране труда
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные НПА, обучение персонала и автоматизация документооборота в одной системе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="FileCheck" className="text-blue-500" size={32} />
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">2026</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-1">6</div>
                <p className="text-sm text-gray-600">Новых НПА в базе</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="Users" className="text-orange-500" size={32} />
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Активно</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-1">211</div>
                <p className="text-sm text-gray-600">Сотрудников в системе</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="BookOpen" className="text-green-500" size={32} />
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">В процессе</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-1">43</div>
                <p className="text-sm text-gray-600">Проходят обучение</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="AlertTriangle" className="text-red-500" size={32} />
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Внимание</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-1">9</div>
                <p className="text-sm text-gray-600">Случаев за полугодие</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-l-4 border-l-blue-500" onClick={() => setActiveModal('npa')}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="BookMarked" className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">База НПА</CardTitle>
                    <CardDescription>Актуальные документы 2026</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Все нормативно-правовые акты по охране труда с удобной фильтрацией и поиском
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Открыть базу
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-l-4 border-l-orange-500" onClick={() => setActiveModal('act-n1')}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Создать Акт Н-1</CardTitle>
                    <CardDescription>Пошаговое заполнение</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Конструктор документов с автозаполнением и готовыми фразами
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Начать создание
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-l-4 border-l-green-500" onClick={() => setActiveModal('templates')}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="FolderOpen" className="text-green-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Шаблоны документов</CardTitle>
                    <CardDescription>15 готовых шаблонов</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Библиотека типовых документов с автозаполнением данных
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Смотреть шаблоны
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-l-4 border-l-purple-500" onClick={() => setActiveModal('training')}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="GraduationCap" className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Обучение персонала</CardTitle>
                    <CardDescription>Курсы и проверка знаний</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Назначение обучения, отслеживание прогресса и тестирование
                </p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Перейти к курсам
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-l-4 border-l-teal-500" onClick={() => setActiveModal('employee')}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Icon name="UserPlus" className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Добавить сотрудника</CardTitle>
                    <CardDescription>С автоназначением обучения</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Автоматический подбор инструктажей и СИЗ по должности
                </p>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Добавить
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-l-4 border-l-indigo-500" onClick={() => setActiveModal('analytics')}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Icon name="BarChart3" className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Аналитика и отчеты</CardTitle>
                    <CardDescription>Статистика и экспорт</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Дашборды по травматизму, обучению и нарушениям
                </p>
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                  Открыть аналитику
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={activeModal === 'npa'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="BookOpen" className="text-blue-500" size={28} />
              База актуальных НПА по охране труда
            </DialogTitle>
            <DialogDescription>
              Нормативно-правовые акты, вступающие в силу в 2026 году
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex gap-3">
              <Input placeholder="Поиск по названию или номеру..." className="flex-1" />
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="siz">СИЗ</SelectItem>
                  <SelectItem value="safety">Безопасность в ЧС</SelectItem>
                  <SelectItem value="standards">Профстандарты</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4">
              {npaData.map((npa) => (
                <Card key={npa.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedNPA(npa)}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg">{npa.title}</CardTitle>
                          {npa.isNew && <Badge className="bg-orange-500 text-white">Новый</Badge>}
                        </div>
                        <CardDescription>{npa.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="ml-4">{npa.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Icon name="Calendar" size={16} />
                        <span>Вступает в силу: {npa.dateEffective}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        Подробнее <Icon name="ChevronRight" size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={selectedNPA !== null} onOpenChange={() => setSelectedNPA(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedNPA?.title}</DialogTitle>
            <DialogDescription>
              <div className="flex items-center gap-4 mt-2">
                <Badge>{selectedNPA?.category}</Badge>
                <span className="text-sm">Вступает в силу: {selectedNPA?.dateEffective}</span>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Описание</h4>
              <p className="text-gray-700">{selectedNPA?.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Ключевые изменения</h4>
              <p className="text-gray-700">{selectedNPA?.fullText}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Icon name="Info" className="text-blue-600 mt-1" size={20} />
                <div>
                  <p className="font-medium text-blue-900">Справочная информация</p>
                  <p className="text-sm text-blue-700 mt-1">
                    Документ опубликован на официальном портале нормативных правовых актов РФ
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать PDF
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="Bookmark" size={18} className="mr-2" />
                В избранное
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'act-n1'} onOpenChange={() => { setActiveModal(null); setCurrentStep(1); }}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl">Создать акт о несчастном случае (Н-1)</DialogTitle>
            <DialogDescription>Пошаговое заполнение с автоподсказками</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-4 gap-6 h-[600px]">
            <div className="col-span-1 border-r pr-4 space-y-2">
              {[
                { num: 1, title: "Основные данные", icon: "FileText" },
                { num: 2, title: "Пострадавший", icon: "User" },
                { num: 3, title: "Обстоятельства", icon: "AlertCircle" },
                { num: 4, title: "Причины", icon: "Search" },
                { num: 5, title: "Мероприятия", icon: "CheckCircle2" }
              ].map((step) => (
                <button
                  key={step.num}
                  onClick={() => setCurrentStep(step.num)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentStep === step.num
                      ? 'bg-blue-500 text-white shadow-md'
                      : currentStep > step.num
                      ? 'bg-green-50 text-green-700 hover:bg-green-100'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      currentStep === step.num ? 'bg-white text-blue-500' : currentStep > step.num ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.num ? '✓' : step.num}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{step.title}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="col-span-3 overflow-y-auto">
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-lg font-semibold">Шаг 1: Основные данные</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Дата несчастного случая</Label>
                      <Input type="date" defaultValue="2026-01-15" />
                    </div>
                    <div>
                      <Label>Время</Label>
                      <Input type="time" defaultValue="14:30" />
                    </div>
                    <div className="col-span-2">
                      <Label>Организация</Label>
                      <Input placeholder="ООО «Производство»" />
                    </div>
                    <div className="col-span-2">
                      <Label>Подразделение</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите подразделение" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workshop1">Цех №1</SelectItem>
                          <SelectItem value="workshop2">Цех №2</SelectItem>
                          <SelectItem value="warehouse">Склад</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg flex items-start gap-2">
                    <Icon name="Info" className="text-blue-600 mt-0.5" size={18} />
                    <p className="text-sm text-blue-700">
                      Время указывается по местному. Для филиалов заполняется обособленное подразделение.
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-lg font-semibold">Шаг 2: Сведения о пострадавшем</h3>
                  <div className="space-y-4">
                    <div>
                      <Label>ФИО пострадавшего</Label>
                      <Input placeholder="Иванов Иван Иванович" />
                      <p className="text-xs text-gray-500 mt-1">При вводе ФИО система подтянет данные из базы сотрудников</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Должность</Label>
                        <Input placeholder="Слесарь 4 разряда" disabled className="bg-gray-50" />
                      </div>
                      <div>
                        <Label>Стаж работы</Label>
                        <Input placeholder="3 года 2 месяца" disabled className="bg-gray-50" />
                      </div>
                    </div>
                    <div>
                      <Label>Дата рождения</Label>
                      <Input type="date" disabled className="bg-gray-50" />
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg flex items-start gap-2">
                    <Icon name="CheckCircle2" className="text-green-600 mt-0.5" size={18} />
                    <p className="text-sm text-green-700">
                      Данные о сотруднике автоматически подгружены из раздела «Сотрудники»
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-lg font-semibold">Шаг 3: Обстоятельства несчастного случая</h3>
                  <div>
                    <Label>Описание обстоятельств</Label>
                    <Textarea rows={6} placeholder="Опишите, что произошло..." />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Готовые фразы-шаблоны:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "...поскользнулся на лестнице",
                        "...получил ожог при контакте с...",
                        "...травма руки при работе с оборудованием",
                        "...падение с высоты",
                        "...воздействие электрического тока"
                      ].map((phrase, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {phrase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg flex items-start gap-2">
                    <Icon name="Lightbulb" className="text-orange-600 mt-0.5" size={18} />
                    <p className="text-sm text-orange-700">
                      Нажмите на фразу-шаблон, чтобы добавить её в описание
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-lg font-semibold">Шаг 4: Причины и виновники</h3>
                  <div>
                    <Label>Причина несчастного случая</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите из классификатора" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="equipment">Неисправность оборудования</SelectItem>
                        <SelectItem value="violation">Нарушение требований безопасности</SelectItem>
                        <SelectItem value="noinstruction">Отсутствие инструктажа</SelectItem>
                        <SelectItem value="nosiz">Неприменение СИЗ</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">Классификатор причин согласно Приказу Минтруда</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-900 mb-2">Рекомендуемые причины на основе обстоятельств:</p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Нарушение требований безопасности при работе на высоте</li>
                      <li>• Неприменение средств индивидуальной защиты</li>
                    </ul>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-lg font-semibold">Шаг 5: Мероприятия по предотвращению</h3>
                  <div className="space-y-3">
                    {[
                      "Провести внеплановый инструктаж для всех работников",
                      "Издать приказ о соблюдении требований безопасности",
                      "Организовать проверку состояния оборудования",
                      "Обеспечить работников необходимыми СИЗ",
                      "Провести дополнительное обучение"
                    ].map((measure, idx) => (
                      <label key={idx} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-sm">{measure}</span>
                      </label>
                    ))}
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg flex items-start gap-2">
                    <Icon name="Sparkles" className="text-green-600 mt-0.5" size={18} />
                    <p className="text-sm text-green-700">
                      На основе выбранных мер будет сгенерирован черновик приказа
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  <Icon name="ChevronLeft" size={16} className="mr-2" />
                  Назад
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить черновик
                  </Button>
                  {currentStep < 5 ? (
                    <Button
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                    >
                      Далее
                      <Icon name="ChevronRight" size={16} className="ml-2" />
                    </Button>
                  ) : (
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Icon name="FileCheck" size={16} className="mr-2" />
                      Создать акт
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'templates'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="FolderOpen" className="text-green-500" size={28} />
              Библиотека шаблонов документов
            </DialogTitle>
            <DialogDescription>15 готовых шаблонов с автозаполнением</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="orders">Приказы</TabsTrigger>
              <TabsTrigger value="instructions">Инструкции</TabsTrigger>
              <TabsTrigger value="protocols">Протоколы</TabsTrigger>
              <TabsTrigger value="notifications">Уведомления</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <Card
                    key={template.id}
                    className="hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1"
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 ${template.color} rounded-lg flex items-center justify-center mb-3`}>
                        <Icon name={template.icon as any} className="text-white" size={24} />
                      </div>
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">{template.category}</Badge>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Использовать шаблон
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'training'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="GraduationCap" className="text-purple-500" size={28} />
              Обучение и проверка знаний персонала
            </DialogTitle>
            <DialogDescription>Курсы, материалы и отслеживание прогресса</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Всего сотрудников</CardDescription>
                  <CardTitle className="text-3xl">211</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Активных курсов</CardDescription>
                  <CardTitle className="text-3xl">4</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Средний прогресс</CardDescription>
                  <CardTitle className="text-3xl">66%</CardTitle>
                </CardHeader>
              </Card>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Активные курсы</h3>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Назначить курс
                </Button>
              </div>

              <div className="space-y-3">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-base">{course.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-1">
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {course.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Users" size={14} />
                              {course.students} студентов
                            </span>
                          </CardDescription>
                        </div>
                        <Badge className={course.progress === 100 ? "bg-green-500" : "bg-orange-500"}>
                          {course.progress}%
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={course.progress} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'employee'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Добавить нового сотрудника</DialogTitle>
            <DialogDescription>Данные автоматически используются в документах</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase text-gray-500">Основные данные</h3>
              <div>
                <Label>ФИО</Label>
                <Input placeholder="Иванов Иван Иванович" />
              </div>
              <div>
                <Label>Дата приема</Label>
                <Input type="date" />
              </div>
              <div>
                <Label>Должность</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите из справочника" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="welder">Сварщик</SelectItem>
                    <SelectItem value="electrician">Электрик</SelectItem>
                    <SelectItem value="mechanic">Слесарь</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Подразделение</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите подразделение" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="workshop1">Цех №1</SelectItem>
                    <SelectItem value="workshop2">Цех №2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase text-gray-500">Автоматические назначения</h3>
              <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">Необходимые инструктажи:</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={14} />
                      Вводный инструктаж
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={14} />
                      Первичный на рабочем месте
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={14} />
                      Пожарная безопасность
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">График медосмотров:</p>
                  <p className="text-sm text-blue-700">Раз в год (вредные факторы)</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-900 mb-2">Норма выдачи СИЗ:</p>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Каска защитная</li>
                    <li>• Перчатки спилковые</li>
                    <li>• Очки защитные</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white">
              Сохранить и назначить обучение
            </Button>
            <Button variant="outline" className="flex-1">
              Только сохранить
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeModal === 'analytics'} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Icon name="BarChart3" className="text-indigo-500" size={28} />
              Аналитика и отчеты
            </DialogTitle>
            <DialogDescription>Статистика по травматизму, обучению и нарушениям</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Травматизм за полугодие 2026</CardTitle>
                  <CardDescription>Количество случаев и дни нетрудоспособности</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={traumaData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="cases" fill="#F97316" name="Случаев" />
                      <Bar dataKey="days" fill="#0EA5E9" name="Дней потеряно" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Статус обучения персонала</CardTitle>
                  <CardDescription>Распределение по статусам</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={trainingData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry) => `${entry.name}: ${entry.value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {trainingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Ключевые показатели (KPI)</CardTitle>
                    <CardDescription>Основные метрики безопасности</CardDescription>
                  </div>
                  <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                    <Icon name="Download" size={16} className="mr-2" />
                    Экспорт отчета
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">0.42</div>
                    <p className="text-sm text-gray-600 mt-1">Коэффициент частоты</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">73%</div>
                    <p className="text-sm text-gray-600 mt-1">Обучено в срок</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">9</div>
                    <p className="text-sm text-gray-600 mt-1">Несчастных случаев</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">75</div>
                    <p className="text-sm text-gray-600 mt-1">Дней потеряно</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p className="text-sm">
            © 2026 SafeWork Pro. Система управления охраной труда
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Все документы соответствуют актуальному законодательству РФ
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;