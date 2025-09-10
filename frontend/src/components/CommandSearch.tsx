import React, { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

interface Command {
  name: string;
  url: string;
  description?: string;
  platform: string;
}

interface CommandSearchProps {
  commands: Command[];
  onCommandSelect?: (command: Command) => void;
}

const CommandSearch: React.FC<CommandSearchProps> = ({ commands, onCommandSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCommands, setFilteredCommands] = useState<Command[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setFilteredCommands([]);
      setShowResults(false);
      return;
    }

    const filtered = commands.filter(command =>
      command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.platform.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCommands(filtered.slice(0, 10)); // Limit to 10 results
    setShowResults(true);
  }, [searchTerm, commands]);

  const handleCommandClick = (command: Command) => {
    // Dispatch custom event for navigation
    const event = new CustomEvent('commandSelected', {
      detail: command
    });
    document.dispatchEvent(event);

    setSearchTerm('');
    setShowResults(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search commands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-10 pr-4 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:text-slate-100"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {showResults && filteredCommands.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {filteredCommands.map((command, index) => (
            <button
              key={index}
              onClick={() => handleCommandClick(command)}
              className="w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700 border-b border-slate-200 dark:border-slate-700 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-sm font-medium text-slate-900 dark:text-slate-100">
                    {command.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                    {command.platform}
                  </div>
                </div>
                <div className="text-blue-600 dark:text-blue-400">
                  →
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {showResults && filteredCommands.length === 0 && searchTerm.length >= 2 && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 text-center">
            No commands found for "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  );
};

export default CommandSearch;
