/**
 * Valide une adresse email selon les critères suivants :
 * - Doit contenir au moins un @
 * - Doit contenir au moins un point dans le nom de domaine (après le @)
 * - Le point ne peut pas être le dernier caractère
 * - Ne peut contenir aucun espace
 * - Doit avoir du texte avant et après le @
 * 
 * @param email - La chaîne de caractères à valider
 * @returns true si l'email est valide, false sinon
 */
export function validateEmail(email: string): boolean {
  // Vérifier si l'email contient des espaces
  if (email.indexOf(' ') !== -1) {
    return false;
  }

  // Vérifier si l'email contient au moins un @
  const atIndex = email.indexOf('@');
  if (atIndex === -1) {
    return false;
  }

  // Vérifier qu'il y a du texte avant le @
  if (atIndex === 0) {
    return false;
  }

  // Vérifier qu'il y a du texte après le @
  if (atIndex === email.length - 1) {
    return false;
  }

  // Vérifier qu'il n'y a qu'un seul @
  const lastAtIndex = email.lastIndexOf('@');
  if (atIndex !== lastAtIndex) {
    return false;
  }

  // Extraire le nom de domaine (partie après le @)
  const domain = email.substring(atIndex + 1);

  // Vérifier qu'il y a au moins un point dans le nom de domaine
  const dotIndex = domain.indexOf('.');
  if (dotIndex === -1) {
    return false;
  }

  // Vérifier que le point n'est pas le dernier caractère
  if (dotIndex === domain.length - 1) {
    return false;
  }

  return true;
}

