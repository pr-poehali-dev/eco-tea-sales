import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { api } from '@/lib/api';
import Icon from '@/components/ui/icon';

const Admin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    
    try {
      const result = await api.auth.login(username, password);
      
      if (result.success) {
        if (result.user.isAdmin) {
          localStorage.setItem('user', JSON.stringify(result.user));
          navigate('/?adminMode=true');
        } else {
          setError('У вас нет прав администратора');
        }
      } else {
        setError(result.error || 'Ошибка авторизации');
      }
    } catch (err) {
      setError('Ошибка подключения к серверу');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-primary">
        <CardHeader>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Shield" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-heading">
              Админ-панель
            </h1>
          </div>
          <CardTitle>Вход для администраторов</CardTitle>
          <CardDescription>Введите учетные данные администратора</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Логин</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              disabled={loading}
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Пароль</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              disabled={loading}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          
          {error && (
            <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-lg">
              {error}
            </div>
          )}
          
          <Button className="w-full" onClick={handleLogin} disabled={loading}>
            {loading ? 'Вход...' : 'Войти'}
          </Button>
          
          <Button variant="ghost" className="w-full" onClick={() => navigate('/')}>
            Вернуться на главную
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
