
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

const AuthButton = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Button variant="ghost" className="text-gray-600 hover:text-blue-600" disabled>
        Loading...
      </Button>
    );
  }

  if (user) {
    return (
      <Link to="/dashboard">
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Dashboard
        </Button>
      </Link>
    );
  }

  return (
    <Link to="/auth">
      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
        Get Started
      </Button>
    </Link>
  );
};

export default AuthButton;
