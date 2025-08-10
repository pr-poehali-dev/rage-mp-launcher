import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const connectToServer = () => {
    // Логика подключения к серверу 62.113.113.59:22005
    window.open("ragemp://62.113.113.59:22005", "_blank");
  };

  const donationPackages = [
    {
      id: 1,
      title: "СТАРТЕР",
      price: "399₽",
      features: ["1,000,000$", "Премиум автомобиль", "VIP статус на 30 дней"],
      color: "from-electric-cyan to-blue-500"
    },
    {
      id: 2,
      title: "БИЗНЕС",
      price: "799₽", 
      features: ["5,000,000$", "Элитный автомобиль", "VIP статус на 60 дней", "Приоритет в очереди"],
      color: "from-electric-magenta to-purple-500"
    },
    {
      id: 3,
      title: "ПРЕМИУМ",
      price: "1299₽",
      features: ["10,000,000$", "Суперкар", "VIP статус на 90 дней", "Эксклюзивные скины", "Персональный саппорт"],
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const faqItems = [
    {
      question: "Как начать играть на сервере?",
      answer: "Нажмите кнопку 'ИГРАТЬ' для автоматического подключения к серверу Miami RP."
    },
    {
      question: "Что такое донатные пакеты?",
      answer: "Донатные пакеты дают преимущества в игре: деньги, автомобили, VIP статус и другие бонусы."
    },
    {
      question: "Как получить поддержку?",
      answer: "Обратитесь к нашей команде поддержки через Discord или используйте форму обратной связи."
    }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark text-foreground relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/img/00068e61-3a42-45fd-8d18-38377f3d0289.jpg')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="game-title text-6xl mb-4 animate-pulse-glow">
            MIAMI RP
          </h1>
          <p className="text-xl text-muted-foreground font-roboto">
            Погрузись в мир криминального Майами
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <Badge variant="secondary" className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan">
              <Icon name="Users" className="w-4 h-4 mr-2" />
              Онлайн: 847
            </Badge>
            <Badge variant="secondary" className="bg-electric-magenta/20 text-electric-magenta border-electric-magenta">
              <Icon name="Server" className="w-4 h-4 mr-2" />
              62.113.113.59:22005
            </Badge>
          </div>
        </div>

        {/* Main Action */}
        <div className="text-center mb-16">
          <Button 
            onClick={connectToServer}
            size="lg"
            className="bg-gradient-to-r from-electric-cyan to-electric-magenta hover:from-electric-magenta hover:to-electric-cyan text-gaming-dark font-orbitron font-bold text-xl px-12 py-6 rounded-lg transition-all duration-300 animate-glow neon-border"
          >
            <Icon name="Play" className="w-6 h-6 mr-3" />
            ИГРАТЬ
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Автоматическое подключение к серверу Miami RP
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gaming-gray/50">
            <TabsTrigger value="info" className="font-orbitron">Информация</TabsTrigger>
            <TabsTrigger value="donate" className="font-orbitron">Донат</TabsTrigger>
            <TabsTrigger value="social" className="font-orbitron">Сообщество</TabsTrigger>
            <TabsTrigger value="support" className="font-orbitron">Поддержка</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gaming-gray/30 border-electric-cyan/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-electric-cyan">
                    <Icon name="MapPin" className="w-5 h-5 mr-2" />
                    Локация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">Детализированная карта Майами с уникальными локациями и достопримечательностями.</p>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray/30 border-electric-magenta/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-electric-magenta">
                    <Icon name="Car" className="w-5 h-5 mr-2" />
                    Транспорт
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">Более 200 видов транспорта: от суперкаров до яхт и вертолетов.</p>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray/30 border-neon-cyan/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-neon-cyan">
                    <Icon name="Building" className="w-5 h-5 mr-2" />
                    Работа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">Легальные и нелегальные способы заработка. Создай свою криминальную империю.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="donate" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {donationPackages.map((pkg) => (
                <Card key={pkg.id} className="bg-gaming-gray/30 border-gaming-gray hover:border-electric-cyan/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className={`font-orbitron text-xl bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="Check" className="w-4 h-4 mr-2 text-electric-cyan" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-gradient-to-r from-electric-cyan to-electric-magenta hover:from-electric-magenta hover:to-electric-cyan text-gaming-dark font-orbitron">
                      Приобрести
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gaming-gray/30 border-[#7289da]/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-[#7289da]">
                    <Icon name="MessageSquare" className="w-5 h-5 mr-2" />
                    Discord
                  </CardTitle>
                  <CardDescription>Присоединяйся к нашему сообществу</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Общайся с игроками, получай новости и участвуй в событиях.</p>
                  <Button variant="outline" className="border-[#7289da] text-[#7289da] hover:bg-[#7289da] hover:text-white">
                    <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                    Перейти в Discord
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray/30 border-electric-cyan/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-electric-cyan">
                    <Icon name="Globe" className="w-5 h-5 mr-2" />
                    Социальные сети
                  </CardTitle>
                  <CardDescription>Следи за новостями проекта</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="border-electric-cyan text-electric-cyan">
                      <Icon name="Youtube" className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-electric-cyan text-electric-cyan">
                      <Icon name="Instagram" className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-electric-cyan text-electric-cyan">
                      <Icon name="Twitter" className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="mt-8">
            <div className="space-y-6">
              <Card className="bg-gaming-gray/30 border-electric-magenta/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-electric-magenta">
                    <Icon name="HelpCircle" className="w-5 h-5 mr-2" />
                    Часто задаваемые вопросы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqItems.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground mb-2">{item.question}</h4>
                        <p className="text-muted-foreground text-sm">{item.answer}</p>
                        {index < faqItems.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gaming-gray/30 border-electric-cyan/30">
                <CardHeader>
                  <CardTitle className="font-orbitron text-electric-cyan">
                    <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                    Техническая поддержка
                  </CardTitle>
                  <CardDescription>Нужна помощь? Мы готовы помочь!</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-gaming-dark">
                      <Icon name="Mail" className="w-4 h-4 mr-2" />
                      Написать в поддержку
                    </Button>
                    <Button variant="outline" className="border-electric-magenta text-electric-magenta hover:bg-electric-magenta hover:text-gaming-dark">
                      <Icon name="Phone" className="w-4 h-4 mr-2" />
                      Онлайн чат
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center mt-16 text-muted-foreground">
          <p className="font-orbitron text-sm">
            © 2024 Miami RP. Все права защищены. Версия лаунчера 2.0.1
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;