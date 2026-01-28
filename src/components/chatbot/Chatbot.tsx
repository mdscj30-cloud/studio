
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, MessageSquare, Send, X } from 'lucide-react';
import { chat, ChatInput } from '@/ai/flows/chat';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content: "Hello! I'm the support assistant for Nexa Consultancy. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatInput: ChatInput = {
        message: input,
        history: messages,
      };
      const result = await chat(chatInput);
      const modelMessage: Message = { role: 'model', content: result.response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'model',
        content: 'Sorry, I seem to be having trouble connecting. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Chatbot error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
          <span className="sr-only">Toggle Chat</span>
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <Card className="w-[350px] h-[500px] flex flex-col shadow-2xl">
            <CardHeader>
              <CardTitle className='text-primary'>Support Assistant</CardTitle>
              <CardDescription>Ask me anything about Nexa Consultancy.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <ScrollArea className="h-full pr-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        'flex items-start gap-3',
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.role === 'model' && (
                        <Avatar className="w-8 h-8">
                           <AvatarImage src="/Nexalogo.png" alt="Nexa Consultancy Logo" />
                           <AvatarFallback className="bg-primary text-primary-foreground">N</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          'p-3 rounded-lg max-w-[80%]',
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                       {message.role === 'user' && (
                        <Avatar className="w-8 h-8">
                           <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex items-start gap-3 justify-start">
                        <Avatar className="w-8 h-8">
                           <AvatarImage src="/Nexalogo.png" alt="Nexa Consultancy Logo" />
                           <AvatarFallback className="bg-primary text-primary-foreground">N</AvatarFallback>
                        </Avatar>
                        <div className="p-3 rounded-lg bg-muted">
                           <Loader2 className="w-5 h-5 animate-spin text-primary" />
                        </div>
                     </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form
                className="flex w-full items-center space-x-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <Input
                  id="message"
                  placeholder="Type your message..."
                  className="flex-1"
                  autoComplete="off"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || input.trim() === ''}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
