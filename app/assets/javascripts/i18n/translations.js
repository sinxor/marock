I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {
  "Add": "Add",
  "Addyourinterest": "Add your interest",
  "All": "All",
  "Bookmarks": "Bookmarks",
  "Delete": "Delete",
  "Draftsandstories": "Drafts and stories",
  "Edit": "Edit",
  "Facebookin": "Sign in with Facebook",
  "Googlein": "Sign in with Google",
  "Home": "Home",
  "NewPost": "New Post",
  "People": "People",
  "Profile": "Profile",
  "Publish": "Publish",
  "Readmore": "Read more..",
  "Recommended": "Recommended by",
  "Recommendedandfeat": "Featured by Sinzo staff and recommended by",
  "Relatedstories": "Related stories",
  "Responses": "Responses",
  "SearchStories": "Search Stories",
  "Signinup": "Sign in/ Sign up",
  "Signinupemail": "Sign in or Sign up with email",
  "Signout": "Sign out",
  "Title": "Title",
  "Topstories": "Top Stories",
  "Twitterin": "Sign in with Twitter",
  "Writearesponse": "Write a response",
  "Writeastory": "Write a story",
  "activerecord": {
    "errors": {
      "messages": {
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        }
      }
    }
  },
  "alldone": "You are following all users",
  "alsocommentnotif": "also commented on a",
  "date": {
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "formats": {
      "default": "%Y-%m-%d",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes",
        "zero": "moins d'une minute"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds",
        "zero": "moins d'une seconde"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Seconds",
      "year": "Year"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Your email address has been successfully confirmed.",
      "send_instructions": "You will receive an email with instructions for how to confirm your email address in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive an email with instructions for how to confirm your email address in a few minutes."
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account is not activated yet.",
      "invalid": "Invalid %{authentication_keys} or password.",
      "last_attempt": "You have one more attempt before your account is locked.",
      "locked": "Your account is locked.",
      "not_found_in_database": "Invalid %{authentication_keys} or password.",
      "timeout": "Your session expired. Please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing.",
      "unconfirmed": "You have to confirm your email address before continuing."
    },
    "mailer": {
      "confirmation_instructions": {
        "subject": "Confirmation instructions"
      },
      "password_change": {
        "subject": "Password Changed"
      },
      "reset_password_instructions": {
        "subject": "Reset password instructions"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "omniauth_callbacks": {
      "failure": "Could not authenticate you from %{kind} because \"%{reason}\".",
      "success": "Successfully authenticated from %{kind} account."
    },
    "passwords": {
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
      "updated": "Your password has been changed successfully. You are now signed in.",
      "updated_not_active": "Your password has been changed successfully."
    },
    "registrations": {
      "destroyed": "Bye! Your account has been successfully cancelled. We hope to see you again soon.",
      "signed_up": "Welcome! You have signed up successfully.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please follow the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and follow the confirm link to confirm your new email address.",
      "updated": "Your account has been updated successfully."
    },
    "sessions": {
      "already_signed_out": "Signed out successfully.",
      "signed_in": "Signed in successfully.",
      "signed_out": "Signed out successfully."
    },
    "unlocks": {
      "send_instructions": "You will receive an email with instructions for how to unlock your account in a few minutes.",
      "send_paranoid_instructions": "If your account exists, you will receive an email with instructions for how to unlock it in a few minutes.",
      "unlocked": "Your account has been unlocked successfully. Please sign in to continue."
    }
  },
  "errors": {
    "connection_refused": "Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "was already confirmed, please try signing in",
      "blank": "can't be blank",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "doesn't match %{attribute}",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "can't be empty",
      "equal_to": "must be equal to %{count}",
      "even": "must be even",
      "exclusion": "is reserved",
      "expired": "has expired, please request a new one",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "is not included in the list",
      "invalid": "is invalid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "not_found": "not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "1 error prohibited this %{resource} from being saved:",
        "other": "%{count} errors prohibited this %{resource} from being saved:"
      },
      "odd": "must be odd",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "has already been taken",
      "too_long": {
        "one": "is too long (maximum is 1 character)",
        "other": "is too long (maximum is %{count} characters)"
      },
      "too_short": {
        "one": "is too short (minimum is 1 character)",
        "other": "is too short (minimum is %{count} characters)"
      },
      "wrong_length": {
        "one": "is the wrong length (should be 1 character)",
        "other": "is the wrong length (should be %{count} characters)"
      }
    },
    "unacceptable_request": "A supported version is expected in the Accept header.\n",
    "unavailable_session": "Session %{id} is is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"
  },
  "feattags": "Featured tags",
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} was successfully created."
      },
      "destroy": {
        "alert": "%{resource_name} could not be destroyed.",
        "notice": "%{resource_name} was successfully destroyed."
      },
      "update": {
        "notice": "%{resource_name} was successfully updated."
      }
    }
  },
  "followmessage": "You are not following any tags",
  "follownotif": "started following you",
  "helpers": {
    "select": {
      "prompt": "Please select"
    },
    "submit": {
      "create": "Create %{model}",
      "submit": "Save %{model}",
      "update": "Update %{model}"
    }
  },
  "lessthanaminuteread": "less than a minute read",
  "likenotif": "liked your",
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "peopletofollow": "People to follow",
  "post": "post",
  "prompts": {
    "day": "Jour",
    "hour": "Heure",
    "minute": "Minute",
    "month": "Mois",
    "second": "Seconde",
    "year": "Année"
  },
  "read": "read",
  "refresh": "refresh",
  "response": "response",
  "responsenotif": "responded to your",
  "support": {
    "array": {
      "last_word_connector": ", and ",
      "two_words_connector": " and ",
      "words_connector": ", "
    }
  },
  "tagsyoufollow": "Tags you follow",
  "tellyourstory": "Tell your Story ...",
  "time": {
    "am": "am",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "pm"
  },
  "will_paginate": {
    "next_label": "Next &#8594;",
    "page_entries_info": {
      "multi_page": "Displaying %{model} %{from} - %{to} of %{count} in total",
      "multi_page_html": "Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total",
      "single_page": {
        "one": "Displaying 1 %{model}",
        "other": "Displaying all %{count} %{model}",
        "zero": "No %{model} found"
      },
      "single_page_html": {
        "one": "Displaying <b>1</b> %{model}",
        "other": "Displaying <b>all&nbsp;%{count}</b> %{model}",
        "zero": "No %{model} found"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Previous"
  }
});
I18n.translations["fr"] = I18n.extend((I18n.translations["fr"] || {}), {
  "Add": "Ajouter",
  "Addyourinterest": "Ajoutez vos intérêts",
  "All": "Tout",
  "Bookmarks": "Signets",
  "Delete": "Supprimer",
  "Draftsandstories": "Vos petits papiers",
  "Edit": "Modifier",
  "Facebookin": "Connection avec Facebook",
  "Googlein": "Connection avec Google",
  "Home": "Acceuil",
  "NewPost": "Nouveau Post",
  "People": "Utilisateurs",
  "Profile": "Profil",
  "Publish": "Publier",
  "Readmore": "Lire la suite..",
  "Recommended": "Recommandé par",
  "Recommendedandfeat": "Coup de coeur du staff de Sinzo et recommandé par",
  "Relatedstories": "Publications similaires",
  "Responses": "Commentaires",
  "SearchStories": "Recherche...",
  "Signinup": "Se connecter / Créer un compte",
  "Signinupemail": "Connection/Inscription avec votre email",
  "Signout": "Déconnexion",
  "Title": "Titre",
  "Topstories": "Meilleurs Articles",
  "Twitterin": "Connection avec Twitter",
  "Writearesponse": "Commenter",
  "Writeastory": "Écrire une histoire",
  "alldone": "Vous êtes abonné à tous les utilisateurs",
  "alsocommentnotif": "a aussi commenté sur",
  "date": {
    "abbr_day_names": [
      "dim",
      "lun",
      "mar",
      "mer",
      "jeu",
      "ven",
      "sam"
    ],
    "abbr_month_names": [
      null,
      "jan.",
      "fév.",
      "mar.",
      "avr.",
      "mai",
      "juin",
      "juil.",
      "août",
      "sept.",
      "oct.",
      "nov.",
      "déc."
    ],
    "day_names": [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi"
    ],
    "formats": {
      "default": "%d/%m/%Y",
      "long": "%e %B %Y",
      "short": "%e %b"
    },
    "month_names": [
      null,
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    ],
    "order": [
      "day",
      "month",
      "year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "environ une heure",
        "other": "environ %{count} heures"
      },
      "about_x_months": {
        "one": "environ un mois",
        "other": "environ %{count} mois"
      },
      "about_x_years": {
        "one": "environ un an",
        "other": "environ %{count} ans"
      },
      "almost_x_years": {
        "one": "presqu'un an",
        "other": "presque %{count} ans"
      },
      "half_a_minute": "une demi-minute",
      "less_than_x_minutes": {
        "one": "moins d'une minute",
        "other": "moins de %{count} minutes",
        "zero": "moins d'une minute"
      },
      "less_than_x_seconds": {
        "one": "moins d'une seconde",
        "other": "moins de %{count} secondes",
        "zero": "moins d'une seconde"
      },
      "over_x_years": {
        "one": "plus d'un an",
        "other": "plus de %{count} ans"
      },
      "x_days": {
        "one": "1 jour",
        "other": "%{count} jours"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "x_months": {
        "one": "1 mois",
        "other": "%{count} mois"
      },
      "x_seconds": {
        "one": "1 seconde",
        "other": "%{count} secondes"
      }
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Votre compte a été validé.",
      "send_instructions": "Vous allez recevoir les instructions nécessaires à la confirmation de votre compte dans quelques minutes.",
      "send_paranoid_instructions": "Si votre e-mail existe dans notre base de données, vous allez bientôt recevoir un e-mail contenant les instructions de confirmation de votre compte."
    },
    "failure": {
      "already_authenticated": "Vous êtes déjà connecté",
      "inactive": "Votre compte n'est pas encore activé.",
      "invalid": "Email ou mot de passe incorrect.",
      "last_attempt": "Vous avez droit à une tentative avant que votre compte ne soit verrouillé.",
      "locked": "Votre compte est verrouillé.",
      "not_found_in_database": "Email ou mot de passe invalide.",
      "timeout": "Votre session est expirée. Veuillez vous reconnecter pour continuer.",
      "unauthenticated": "Vous devez vous connecter ou vous inscrire pour continuer.",
      "unconfirmed": "Vous devez valider votre compte pour continuer."
    },
    "mailer": {
      "confirmation_instructions": {
        "subject": "Instructions de confirmation"
      },
      "password_change": {
        "subject": "Votre mot de passe a été modifié avec succés."
      },
      "reset_password_instructions": {
        "subject": "Instructions pour changer le mot de passe"
      },
      "unlock_instructions": {
        "subject": "Instructions pour déverrouiller le compte"
      }
    },
    "omniauth_callbacks": {
      "failure": "Nous n'avons pas pu vous authentifier via %{kind} : '%{reason}'.",
      "success": "Authentifié avec succès via %{kind}."
    },
    "passwords": {
      "no_token": "Vous ne pouvez accéder à cette page sans passer par un e-mail de réinitialisation de mot de passe. Si vous êtes passé par un e-mail de ce type, assurez-vous d'utiliser l'URL complète.",
      "send_instructions": "Vous allez recevoir les instructions de réinitialisation du mot de passe dans quelques instants",
      "send_paranoid_instructions": "Si votre e-mail existe dans notre base de données, vous allez recevoir un lien de réinitialisation par e-mail",
      "updated": "Votre mot de passe a été édité avec succès, vous êtes maintenant connecté",
      "updated_not_active": "Votre mot de passe a été changé avec succès."
    },
    "registrations": {
      "destroyed": "Votre compte a été supprimé avec succès. Nous espérons vous revoir bientôt.",
      "signed_up": "Bienvenue, vous êtes connecté.",
      "signed_up_but_inactive": "Vous êtes bien enregistré. Vous ne pouvez cependant pas vous connecter car votre compte n'est pas encore activé.",
      "signed_up_but_locked": "Vous êtes bien enregistré. Vous ne pouvez cependant pas vous connecter car votre compte est verrouillé.",
      "signed_up_but_unconfirmed": "Un message contenant un lien de confirmation a été envoyé à votre adresse email. Ouvrez ce lien pour activer votre compte.",
      "update_needs_confirmation": "Votre compte a bien été mis à jour mais nous devons vérifier votre nouvelle adresse email. Merci de vérifier vos emails et de cliquer sur le lien de confirmation pour finaliser la validation de votre nouvelle adresse.",
      "updated": "Votre compte a été modifié avec succès."
    },
    "sessions": {
      "already_signed_out": "Déconnecté.",
      "signed_in": "Connecté.",
      "signed_out": "Déconnecté."
    },
    "unlocks": {
      "send_instructions": "Vous allez recevoir les instructions nécessaires au déverrouillage de votre compte dans quelques instants",
      "send_paranoid_instructions": "Si votre compte existe, vous allez bientôt recevoir un email contenant les instructions pour le déverrouiller.",
      "unlocked": "Votre compte a été déverrouillé avec succès, vous êtes maintenant connecté."
    }
  },
  "errors": {
    "messages": {
      "already_confirmed": "a déjà été validé(e), veuillez essayer de vous connecter",
      "confirmation_period_expired": "à confirmer dans les %{period}, merci de faire une nouvelle demande",
      "expired": "a expiré, merci d'en faire une nouvelle demande",
      "not_found": "n'a pas été trouvé(e)",
      "not_locked": "n'était pas verrouillé(e)",
      "not_saved": {
        "one": "1 erreur a empêché ce(tte) %{resource} d'être sauvegardé(e) :",
        "other": "%{count} erreurs ont empêché ce(tte) %{resource} d'être sauvegardé(e) :"
      }
    }
  },
  "feattags": "Tags en vedette",
  "followmessage": "Vous ne suivez aucun tag",
  "follownotif": "vous suit",
  "lessthanaminuteread": "moins d'une minute de lecture",
  "likenotif": "a aimé votre",
  "peopletofollow": "Utilisateurs suggérés",
  "post": "publication",
  "prompts": {
    "day": "Jour",
    "hour": "Heure",
    "minute": "Minute",
    "month": "Mois",
    "second": "Seconde",
    "year": "Année"
  },
  "read": "de lecture",
  "refresh": "Rafraîchir",
  "response": "commentaire",
  "responsenotif": "a commenté sur votre",
  "tagsyoufollow": "Tags que vous suivez",
  "tellyourstory": "Racontez votre histoire ..."
});
