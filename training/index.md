---
layout: base.njk
title: "Northstowe Karate Class Schedule | Kids & Adults"
description: "Join Shotokan Karate classes in Northstowe for beginners to black belts. Sessions on Wednesdays 6:30–8pm and Sundays 3–4pm. First lesson free."
date: "git Last Modified"
changeFrequency: weekly
headerContent: |
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": "https://www.northstowekarate.com/training/#schedule",
        "@type": "EventSeries",
        "name": "Northstowe Karate Weekly Classes",
        "description": "Family Friendly Shotokan Karate classes for ages 8+ held weekly in Northstowe, led by Chief Instructor Simon Apen-Sadler.",
        "startDate": "2024-07-03",
        "eventSchedule": [
          {
            "@type": "Schedule",
            "byDay": "Wednesday",
            "startTime": "18:30",
            "endTime": "20:00",
            "scheduleTimezone": "Europe/London"
          },
          {
            "@type": "Schedule",
            "byDay": "Sunday",
            "startTime": "15:00",
            "endTime": "16:00",
            "scheduleTimezone": "Europe/London"
          }
        ],
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "organizer": {
          "@id": "https://www.northstowekarate.com/#northstowekarateclub"
        },
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@id": "https://www.northstowekarate.com/training/#thecabin"
        },
        "image": "https://www.northstowekarate.com/static/logo.webp",
        "url": "https://www.northstowekarate.com/training/"
      },
      {
        "@id": "https://www.northstowekarate.com/training/#thecabin",
        "@type": "SportsActivityLocation",
        "name": "Northstowe Community Centre (The Cabin)",
        "image": "https://www.northstowekarate.com/static/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1 The Green",
          "addressLocality": "Northstowe",
          "addressRegion": "Cambridge",
          "postalCode": "CB24 1FD",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 52.2885, 
          "longitude": 0.051
        },
        "hasMap": "https://maps.app.goo.gl/wXcMAGknwyPFEgMp6",
        "url": "https://www.northstowekarate.com",
        "telephone": "+447596922670",
        "openingHours": "Wednesday 18:30-20:00, Sunday 15:00-16:00",
        "priceRange": "£",
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Accessible entrance",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Changing facilities",
            "value": true
          }
        ],
        "description": "Family Friendly Shotokan Karate classes for ages 8+ held weekly in Northstowe, led by Chief Instructor Simon Apen-Sadler."
      }
    ]
  }
  </script>

priority: 0.9
---
# Karate Classes at Northstowe Karate Club

## Regular Classes 

We train regularly at [The Cabin, Northstowe](https://maps.app.goo.gl/wXcMAGknwyPFEgMp6) **Wednesdays 6.30-8pm** and on **Sundays 3-4pm**.

Still unsure? You can find out more about our typical class structure on our [what to expect page](/training/what-to-expect/).

## Fees at a glance
There are no monthly minimums — you only pay for the sessions you attend.

The first lesson is always free, so you can try it out and see if you enjoy the lesson. Prices are £4 per session for adults and £3 per session for children.

There are some additional fees such as membership. You can find out more on our [fees](/training/fees/) page.

<section id="upcoming-events" class="mb-4" style="display:none;">

  <h2>Next session</h2>
  <!-- Next session (routine lesson) -->
  <div id="next-session" class="mb-3" aria-live="polite" aria-atomic="true"></div>
  
  <h2>Upcoming events</h2>
  <p>
  See our <a href="/events/">events page</a> for a full list of events.
  </p>
  <div id="special-events" class="mb-3" aria-live="polite"></div>
</section>

<section id="upcoming-lessons" class="mb-4">
  <div>
    <h3 class="h5">Upcoming sessions</h3>
    <div class="table-responsive">
      <table class="table table-sm table-striped" id="upcoming-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody id="upcoming-tbody"></tbody>
      </table>
    </div>
  </div>

  <details id="more-events" class="mt-3">
    <summary class="btn btn-outline-secondary">Show full schedule</summary>
    <div class="table-responsive mt-2">
      <table class="table table-sm table-striped" id="more-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody id="more-tbody"></tbody>
      </table>
    </div>
  </details>
</section>

## Locations
<h3 id="location-cabin">The Cabin</h3>

1 The Green, Northstowe, Cambridge, CB24 1FD

Parking is available outside. Additional parking can be found nearby at either Pathfinder Primary School or Longstanton Park and Ride.

<iframe title="Map to Northstowe Karate Club" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2440.596309193821!2d0.0479411!3d52.2870305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d875d0a30dc935%3A0xdf1f6f7f737e8109!2sNorthstowe%20Karate%20Club!5e0!3m2!1sen!2suk!4v1767020089596!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<!-- training data is served from /static/data/upcoming-events.json (canonical source for events and sessions) -->
<script>
(async function(){
  const cfg = { upcomingCount: 4, locale: 'en-GB', timeZone: 'Europe/London' };
  // Load events from global JSON
  let events = [];
  try{
    const resp = await fetch('/static/data/upcoming-events.json', {cache: 'no-cache'});
    if(resp.ok){
      const data = await resp.json();
      events = (data || []).map(e => ({...e, date: new Date(e.datetime)})).filter(e => !isNaN(e.date));
    } else {
      console.error('Failed to fetch events JSON:', resp.status);
    }
  } catch(err){
    console.error('Error fetching events JSON:', err);
  }

  events.sort((a,b) => a.date - b.date);

  const now = new Date();
  const future = events.filter(e => e.date >= now);
  
  // Parse endDatetime if present
  future.forEach(e => {
    if(e.endDatetime) e.endDate = new Date(e.endDatetime);
  });

  // Separate special events (gradings) from routine lessons
  const specialEvents = future.filter(e => e.type === 'grading' || e.highlight);
  const routine = future.filter(e => !(e.type === 'grading' || e.highlight));

  const nextOverall = future.length ? future[0] : null;
  const nextRoutine = routine.length ? routine[0] : null;

  const formatDate = d => d.toLocaleDateString(cfg.locale, { weekday: 'short', day: 'numeric', month: 'short', timeZone: cfg.timeZone });
  const formatTime = d => d.toLocaleTimeString(cfg.locale, { hour: '2-digit', minute: '2-digit', timeZone: cfg.timeZone });

  const formatDateTime = (start, end) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : null;

    const startFmt = startDate.toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Europe/London'
    });
    const startTime = start.includes('T') ? startDate.toLocaleTimeString('en-GB', {
      hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London'
    }) : '';

    const endFmt = endDate ? endDate.toLocaleDateString('en-GB', {
      weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Europe/London'
    }) : '';
    const endTime = endDate && end.includes('T') ? endDate.toLocaleTimeString('en-GB', {
      hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London'
    }) : '';

    return endDate && (startDate.toDateString() !== endDate.toDateString())
      ? `${startFmt} ${startTime ? + startTime : ''} — ${endFmt} ${endTime ? endTime : ''}`
      : `${startFmt}${startTime ? startTime : ''}${endTime ? ' — ' + endTime : ''}`;
  };

  function badgeHtml(ev){
    if(!ev) return '';
    if(ev.type === 'grading') return `<span class="badge badge-brown ms-2">Grading</span>`;
      if(ev.type === 'gasshuku') return `<span class="badge badge-brown ms-2">Gasshuku</span>`;
    if(ev.highlight) return `<span class="badge bg-warning text-dark ms-2">Event</span>`;
    return '';
  }

  function linkLabel(ev){
    return ev && ev.eventLink ? `<a href="${ev.eventLink}">${ev.label}</a>` : `${ev.label}`;
  }

  // Render special events as cards (highlighted)
  const specialSection = document.getElementById('upcoming-events');
  const specialEl = document.getElementById('special-events');
  if(specialEvents.length){
    // Decide whether to show only the next special event or all specials within the next month
    const nextSpecial = specialEvents[0];
    const cutoff = new Date(); cutoff.setMonth(cutoff.getMonth() + 1);

    if(nextSpecial && nextSpecial.date <= cutoff){
      // Show all special events within the next 3 months
      const within = specialEvents.filter(ev => ev.date <= cutoff);
      specialSection.style.display = '';
      specialEl.innerHTML = within.map(ev => `
        <div class="card p-3 mb-2 event-highlight">
          <div><strong>${linkLabel(ev)}</strong> ${badgeHtml(ev)}</div>
          <div class="small text-muted">${formatDateTime(ev.datetime, ev.endDatetime)} | ${ev.locationLink ? `<a href="${ev.locationLink}">${ev.location}</a>` : ev.location}</div>
          ${ev.notes ? `<div class="mt-1 text-danger small">${ev.notes}</div>` : ''}
          ${ev.eventLink ? `<div class="mt-2"><a class="btn btn-brown btn-sm" href="${ev.eventLink}">Event details</a></div>` : ''}
        </div>
      `).join('');
    } else {
      // Show only the next special event as a single card (keeps training page concise)
      specialSection.style.display = '';
      const ev = nextSpecial;
      specialEl.innerHTML = `
        <div class="card p-3 mb-2 event-highlight">
          <div><strong>${linkLabel(ev)}</strong> ${badgeHtml(ev)}</div>
          <div class="small text-muted">${formatDateTime(ev.datetime, ev.endDatetime)} | ${ev.locationLink ? `<a href="${ev.locationLink}">${ev.location}</a>` : ev.location}</div>
          ${ev.notes ? `<div class="mt-1 text-danger small">${ev.notes}</div>` : ''}
          ${ev.eventLink ? `<div class="mt-2"><a class="btn btn-brown btn-sm" href="${ev.eventLink}">Event details</a></div>` : '<div class="mt-2"><a class="btn btn-link" href="/events/">See all events</a></div>'}
        </div>
      `;
    }
  } else {
    specialSection.style.display = 'none';
    specialEl.innerHTML = '';
  }

  // Render next session (routine) prominently
  const nextEl = document.getElementById('next-session');
  if(nextRoutine){
    nextEl.innerHTML = `
      <div class="card bg-light p-3">
        <strong>Next session:</strong>
        <div class="mt-1">
          ${nextRoutine.eventLink ? `<a href="${nextRoutine.eventLink}">${nextRoutine.label}</a>` : `${nextRoutine.label}`} ${badgeHtml(nextRoutine)}
          <div class="small text-muted">${formatDateTime(nextRoutine.datetime, nextRoutine.endDatetime)}</div>
          ${nextRoutine.notes ? `<div class="text-danger small mt-1">${nextRoutine.notes}</div>` : ''}
          <div class="mt-2"><a class="btn btn-brown btn-sm" href="/lesson-booking/" role="button">Book a free class</a></div>
        </div>
      </div>`;
  } else {
    nextEl.innerHTML = `<div class="alert alert-secondary">No upcoming sessions are scheduled at the moment.</div>`;
  }

  // Render upcoming routine sessions in table (first N after the next one)
  const N = cfg.upcomingCount;
  const startIndex = nextRoutine ? 1 : 0;
  const upcoming = routine.slice(startIndex, startIndex + N);

  // If there are no routine sessions at all, hide the upcoming section
  const upcomingSection = document.getElementById('upcoming-lessons');
  if(routine.length === 0){
    upcomingSection.style.display = 'none';
  } else {
    upcomingSection.style.display = '';
    const upcomingTbody = document.getElementById('upcoming-tbody');
    upcomingTbody.innerHTML = upcoming.length ? upcoming.map(ev => `
      <tr class="${ev.highlight ? 'event-row' : ''}">
        <td>${ev.eventLink ? `<a href="${ev.eventLink}">${ev.label}</a>` : ev.label}</td>
        <td>${formatDate(ev.date)}</td>
        <td>${formatTime(ev.date)}${ev.endDate ? ' – ' + formatTime(ev.endDate) : ''}</td>
        <td>${ev.locationLink ? `<a href="${ev.locationLink}">${ev.location}</a>` : ev.location}</td>
        <td>${ev.notes || ''}</td>
      </tr>
    `).join('') : `<tr><td colspan="5" class="small text-muted">No upcoming sessions scheduled in the short term.</td></tr>`;

    // Remaining routine events into more-table
    const more = routine.slice(startIndex + N);
    const moreTbody = document.getElementById('more-tbody');
    if(more.length){
      moreTbody.innerHTML = more.map(ev => `
        <tr class="${ev.highlight ? 'event-row' : ''}">
          <td>${ev.eventLink ? `<a href="${ev.eventLink}">${ev.label}</a>` : ev.label}</td>
          <td>${formatDate(ev.date)}</td>
          <td>${formatTime(ev.date)}${ev.endDate ? ' – ' + formatTime(ev.endDate) : ''}</td>
          <td>${ev.locationLink ? `<a href="${ev.locationLink}">${ev.location}</a>` : ev.location}</td>
          <td>${ev.notes || ''}</td>
        </tr>
      `).join('');
      document.getElementById('more-events').style.display = '';
      document.getElementById('more-events').open = false;
    } else {
      document.getElementById('more-events').style.display = 'none';
    }
  }
})();
</script>
