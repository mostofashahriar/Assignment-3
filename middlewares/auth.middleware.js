export const protect = (req, res, next) => {
   
    const token = req.headers.authorization;
  
    if (!token || token !== 'Bearer testtoken') {
      return res.status(401).json({ message: 'Not authorized' });
    }
  
    next();
  };
  
  export const isAdmin = (req, res, next) => {
    
    const userIsAdmin = true; 
  
    if (!userIsAdmin) {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  
    next();
  };
  
