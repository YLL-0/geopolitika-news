'use client';

import { useState, useEffect, use } from 'react';
import { supabase } from '@/app/utils/supabaseClient';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image_url?: string;
}

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArticle();
  }, [resolvedParams.id]);

  const fetchArticle = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', resolvedParams.id)
        .single();

      if (error) {
        setError('Article not found');
      } else {
        setArticle(data);
      }
    } catch (error) {
      setError('An error occurred while fetching the article');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The article you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Geopolitika News
            </Link>
            <Link
              href="/admin/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Admin
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Article Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                {article.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(article.date).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              By <span className="font-medium">{article.author}</span>
            </p>
          </div>

          {/* Featured Image */}
          {article.image_url && (
            <div className="relative h-96">
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="p-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                {article.content}
              </div>
            </div>
          </div>
        </article>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>&copy; 2024 Geopolitika News. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 