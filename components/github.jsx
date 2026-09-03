"use client";

import { useEffect, useMemo, useState } from "react";
import "./github-activity.css";

export default function GithubActivity({ username = "AkkiDevlOops" }) {
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGithubActivity() {
      try {
        setLoading(true);

        const response = await fetch(
          `/api/github-contribution?username=${username}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch GitHub activity");
        }

        setCalendar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubActivity();
  }, [username]);

  /*
   * Find where each month starts.
   * This lets us position the month names above
   * the correct contribution columns.
   */
  const months = useMemo(() => {
    if (!calendar?.weeks) return [];

    const result = [];
    let previousMonth = null;

    calendar.weeks.forEach((week, weekIndex) => {
      const firstDay = week.contributionDays?.[0];

      if (!firstDay) return;

      const date = new Date(`${firstDay.date}T00:00:00`);
      const month = date.getMonth();

      if (month !== previousMonth) {
        result.push({
          name: date.toLocaleDateString("en-US", {
            month: "short",
          }),
          index: weekIndex,
        });

        previousMonth = month;
      }
    });

    return result;
  }, [calendar]);

  if (loading) {
    return (
      <div className="github-card">
        <div className="github-loading">
          Loading GitHub activity...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-card">
        <div className="github-error">
          {error}
        </div>
      </div>
    );
  }

  if (!calendar) return null;

  return (
    <div className="github-card">

      {/* Calendar */}
      <div className="github-calendar-wrapper">

        <div className="github-calendar">

          {/* Month labels */}
          <div className="github-months">
            {months.map((month, index) => (
              <span
                key={`${month.name}-${index}`}
                style={{
                  left: `${month.index * 11}px`,
                }}
              >
                {month.name}
              </span>
            ))}
          </div>

          {/* Contribution grid */}
          <div className="github-grid">
            {calendar.weeks.map((week, weekIndex) => (
              <div
                className="github-week"
                key={weekIndex}
              >
                {week.contributionDays.map((day) => (
                  <div
                    key={day.date}
                    className={`github-day ${getContributionLevel(
                      day.contributionCount
                    )}`}
                    title={`${day.contributionCount} contributions on ${formatDate(
                      day.date
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom section */}
      <div className="github-bottom grid md:grid-cols-2 grid-cols-1">

        <div className="col-span-1">
        <span className="github-total">
          {calendar.totalContributions} contributions in 2025-26
        </span>
        </div>

         <div className="github-legend col-span-1">
          <span>Less</span>

          <span className="legend-box level-0" />
          <span className="legend-box level-1" />
          <span className="legend-box level-2" />
          <span className="legend-box level-3" />
          <span className="legend-box level-4" />

          <span>More</span>
        </div> 

      </div>
    </div>
  );
}


/*
 * Convert contribution count into GitHub-style
 * intensity levels.
 */
function getContributionLevel(count) {
  if (count === 0) return "level-0";
  if (count <= 3) return "level-1";
  if (count <= 6) return "level-2";
  if (count <= 9) return "level-3";

  return "level-4";
}


/*
 * Format:
 * Sep 3, 2026
 */
function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}