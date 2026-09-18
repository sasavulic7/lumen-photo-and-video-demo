import { useState, useEffect, useCallback } from 'react';

/**
 * A minimal hash router — no dependency, works from file:// and from any
 * static host without server rewrites. Swap for react-router later by
 * replacing `useRoute`/`navigate` and keeping the same route keys.
 */

export const ROUTES = {
  home: {
    path: '#/',
    label: 'Index',
    title: 'LUMEN — Wedding Photography & Cinematic Film | Jagodina, Serbia',
    description:
      'LUMEN is a wedding photography and film studio based in Jagodina, Serbia. Quiet, documentary coverage for weddings across Serbia and Europe.',
  },
  stories: {
    path: '#/stories',
    label: 'Work',
    title: 'Stories — Wedding Photography & Film | LUMEN, Jagodina',
    description:
      'Selected wedding stories photographed and filmed by LUMEN in Belgrade, Novi Sad, Jagodina and across Serbia.',
  },
  services: {
    path: '#/services',
    label: 'Services',
    title: 'Services — Wedding Photography & Videography | LUMEN Serbia',
    description:
      'Wedding photography, cinematic wedding films, engagement sessions and event coverage from LUMEN studio in Jagodina, Serbia.',
  },
  about: {
    path: '#/about',
    label: 'Studio',
    title: 'Studio — About LUMEN | Wedding Photographer, Jagodina',
    description:
      'A two-person photography and film studio in Jagodina, Serbia, documenting weddings without directing them.',
  },
  contact: {
    path: '#/contact',
    label: 'Contact',
    title: 'Contact — Check Your Date | LUMEN, Jagodina Serbia',
    description:
      'Tell us about your wedding day. LUMEN studio, Jagodina — available across Serbia and Europe.',
  },
};

export const NAV_ITEMS = ['stories', 'services', 'about', 'contact'];

function readHash() {
  const raw = (window.location.hash || '#/').replace(/^#\/?/, '');
  const [route, param] = raw.split('/');
  return { route: route || 'home', param: param || null };
}

export function useRoute() {
  const [state, setState] = useState(readHash);

  useEffect(() => {
    const onChange = () => setState(readHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  useEffect(() => {
    const meta = ROUTES[state.route] || ROUTES.home;
    document.title = meta.title;
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute('content', meta.description);
    const og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute('content', meta.title);
  }, [state.route]);

  return state;
}

export function navigate(route, param) {
  const hash = param ? `#/${route}/${param}` : `#/${route}`;
  if (window.location.hash === hash) return;
  window.location.hash = hash;
  window.scrollTo({ top: 0, behavior: 'auto' });
}

export function useNavigate() {
  return useCallback((route, param) => navigate(route, param), []);
}