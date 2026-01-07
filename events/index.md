---
layout: base.njk
title: "Northstowe Karate Club Events | Past & Upcoming"
description: "Explore past and upcoming events hosted by Northstowe Karate Club, Japan Shotokan Karate England, and the Japan Karate Association."
date: "git Last Modified"
priority: 0.6
changeFrequency: weekly


---

# Upcoming Events

Our club will attend various events both at the club and international level. Key events are listed below - for a full list see [JSKE Events Page](https://www.jske.co.uk/events).

Our club will attend a mix of local, national and international events. Below are brief summaries of upcoming events.

<div id="events-list">Loading events…</div>

<script>
(async function(){
  const el = document.getElementById('events-list');
  try{
    const resp = await fetch('/static/data/upcoming-lessons.json',{cache:'no-cache'});
    if(!resp.ok) throw new Error('Failed to fetch events JSON: '+resp.status);
    const data = await resp.json();
    const now = new Date();
    const items = (data || [])
      .map(e=> ({...e, date: new Date(e.datetime)}))
      .filter(e=> e.date && e.date >= now)
      .filter(e=> e.highlight || ['grading','event','gasshuku'].includes(e.type))
      .sort((a,b)=> a.date - b.date);

    if(!items.length){ el.innerHTML = '<p class="small text-muted">No upcoming events scheduled at the moment.</p>'; return; }

    el.innerHTML = items.map(ev => {
      const date = ev.date;
      const fmt = date.toLocaleDateString('en-GB',{weekday:'short', day:'numeric', month:'short', timeZone:'Europe/London'});
      const time = ev.datetime && ev.datetime.includes('T') ? date.toLocaleTimeString('en-GB',{hour:'2-digit', minute:'2-digit', timeZone:'Europe/London'}) : '';
      const badge = ev.type === 'grading' ? '<span class="badge badge-brown ms-2">Grading</span>' : (ev.type === 'gasshuku' ? '<span class="badge badge-brown ms-2">Gasshuku</span>' : (ev.highlight ? '<span class="badge bg-warning text-dark ms-2">Event</span>' : ''));
      return `<div class="card p-3 mb-3 event-item">
        <div><strong>${ev.eventLink ? `<a href="${ev.eventLink}">${ev.label}</a>` : ev.label}</strong> ${badge}</div>
        <div class="small text-muted mt-1">${fmt}${time ? ' — '+time : ''} ${ev.location ? '| ' + (ev.locationLink ? `<a href="${ev.locationLink}">${ev.location}</a>` : ev.location) : ''}</div>
        ${ev.notes ? `<div class="mt-2 small">${ev.notes}</div>` : ''}
        ${ev.eventLink ? `<div class="mt-2"><a class="btn btn-brown btn-sm" href="${ev.eventLink}">Event details</a></div>` : ''}
      </div>`;
    }).join('');
  }catch(err){
    console.error(err);
    el.innerHTML = '<p class="small text-muted">Unable to load events at this time.</p>';
  }
})();
</script>

<p class="small text-muted"> For weekly lessons see the <a href="/training/">training schedule</a>.</p>