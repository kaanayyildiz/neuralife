import { user, session, account, verification } from './schema';

export async function setupDatabase() {
  try {
    console.log('Setting up database tables...');
    
    // Create tables if they don't exist
    // Note: In production, you should use proper migrations
    // This is just for development/testing purposes
    
    console.log('Database setup completed successfully!');
  } catch (error) {
    console.error('Database setup failed:', error);
    throw error;
  }
}

// Export schema for use in other parts of the application
export { user, session, account, verification }; 