export default function handler(req, res) {
  const { month, day } = req.query;

  const m = parseInt(month);
  const d = parseInt(day);

  if (!m || !d) {
    return res.status(400).json({ error: "Missing month or day" });
  }

  let sign = "";

  if ((m == 3 && d >= 21) || (m == 4 && d <= 19)) sign = "Aries";
  else if ((m == 4 && d >= 20) || (m == 5 && d <= 20)) sign = "Taurus";
  else if ((m == 5 && d >= 21) || (m == 6 && d <= 20)) sign = "Gemini";
  else if ((m == 6 && d >= 21) || (m == 7 && d <= 22)) sign = "Cancer";
  else if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) sign = "Leo";
  else if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) sign = "Virgo";
  else if ((m == 9 && d >= 23) || (m == 10 && d <= 22)) sign = "Libra";
  else if ((m == 10 && d >= 23) || (m == 11 && d <= 21)) sign = "Scorpio";
  else if ((m == 11 && d >= 22) || (m == 12 && d <= 21)) sign = "Sagittarius";
  else if ((m == 12 && d >= 22) || (m == 1 && d <= 19)) sign = "Capricorn";
  else if ((m == 1 && d >= 20) || (m == 2 && d <= 18)) sign = "Aquarius";
  else if ((m == 2 && d >= 19) || (m == 3 && d <= 20)) sign = "Pisces";

  res.status(200).json({ sign });
}

